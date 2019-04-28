import mongoose from 'mongoose'
import Joi from 'joi'
import { UserInputError } from 'apollo-server-core'
import { storeSignUp, signIn } from '../schemasValidation'
import { Store, Product } from '../models'
import * as Auth from '../auth'

export default {
  Query: {
    storeMe: (root, args, { req }, info) => {
      const storeId = req.session.storeId
      return Store.findById(storeId)
    },
    stores: (root, args, { req }, info) => {
      return Store.find({})
    },
    store: (root, { id }, { req }, info) => {
      if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new UserInputError(`${id} is not a valid user ID.`)
      }
      return Store.findById(id)
    }
  },

  Mutation: {
    signUpStore: async (root, args, { req }, info) => {
      await Joi.validate(args, storeSignUp, { abortEarly: false })
      const store = await Store.create(args)
      req.session.userId = store.id
      const token = req.sessionID
      return {
        token,
        store
      }
    },

    storeLogin: async (root, args, { req }, info) => {
      const { email, password } = args

      await Joi.validate(args, signIn, { abortEarly: false })

      const findStore = await Store.findOne({ email })
      const store = await Auth.attemptSignIn(email, password, findStore)
      req.session.storeId = store.id
      const token = req.sessionID

      return {
        token,
        store
      }
    },

    storeSignOut: (root, args, { req, res }, info) => {
      return Auth.signOut(req, res)
    },

    updateStore: async (root, args, { req }, info) => {
      const store = await Store.findOneAndUpdate({ _id: args.id }, { ...args })

      return store
    },

    deleteStore: async (root, { id }, { req }, info) => {
      await Store.findOneAndDelete(id)
      return true
    }
  },

  Store: {
    products: (root, args, { req }, info) => {
      return Product.find({ storeId: Auth.storeId(req) })
    }
  }
}
