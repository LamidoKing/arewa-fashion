import mongoose from 'mongoose'
import pubsub from '../pubsub'
import { UserInputError } from 'apollo-server-express'

import { Cart, Product } from '../models'
export default {
  Query: {
    cartItems: () => Cart.find(),
    cartItem: (root, { id }) => {
      if (mongoose.Types.ObjectId.isValid(id)) {
        throw new UserInputError(`${id} is not a valid user ID.`)
      }
      return Cart.findById(id)
    }
  },
  CartItem: {
    product: (cartItem) => Product.findById(cartItem.productId)
  },
  Mutation: {
    addToCart: (root, { productId }, context) => {
      let cartItem = new Cart({ productId: productId })
      pubsub.publish('ON_NEW_CART_ITEM', cartItem)
      cartItem.save()
      return cartItem
    },

    deleteCartItem: (root, { id }) => {
      Cart.findOneAndDelete(id)
      return ('item deleted')
    }
  },
  Subscription: {
    onNewCartItem: {
      resolve (payload) {
        console.log('Subscription', payload)
        return payload
      },
      subscribe: () => pubsub.asyncIterator('ON_NEW_CART_ITEM')
    }
  }

}
