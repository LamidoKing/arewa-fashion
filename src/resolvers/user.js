import mongoose from 'mongoose'
import Joi from 'joi'
import { UserInputError } from 'apollo-server-express'
import { User } from '../models'
import { signUp, signIn } from '../schemasValidation'
import { attemptSignIn, signOut } from '../auth'

export default {
  Query: {
    me: (root, args, { req }, info) => {
      const userId = req.session.userId
      return User.findById(userId)
    },
    users: (root, args, { req }, info) => {
      return User.find({})
    },
    user: (root, { id }, { req }, info) => {
      if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new UserInputError(`${id} is not a valid user ID.`)
      }
      return User.findById(id)
    }
  },

  Mutation: {
    signUp: async (root, args, { req }, info) => {
      await Joi.validate(args, signUp, { abortEarly: false })

      const user = await User.create(args)

      req.session.userId = user.id

      const token = req.sessionID

      return {
        token,
        user
      }
    },

    login: async (root, args, { req }, info) => {
      const { email, password } = args
      await Joi.validate(args, signIn, { abortEarly: false })
      const findUser = await User.findOne({ email })
      const user = await attemptSignIn(email, password, findUser)
      req.session.userId = user.id
      const token = req.sessionID

      return {
        token,
        user
      }
    },
    signOut: (root, args, { req, res }, info) => {
      return signOut(req, res)
    }
  }
}
