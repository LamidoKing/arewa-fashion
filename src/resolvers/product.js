import { Product, Store } from '../models'
import * as Auth from '../auth'

export default {
  Query: {
    products: () => Product.find(),
    product: (root, { id }) => Product.findById(id)
  },
  Product: {
    store: (product) => Store.findById(product.storeId)
  },

  Mutation: {
    addProduct: async (root, args, { req }, info) => {
      Auth.checkStore(Auth.storeId(req))
      Auth.checkSignedIn(Auth.storeId(req))

      const product = await new Product({
        ...args
      })
      return product.save()
    },

    updateProduct: async (root, args, { req }, info) => {
      Auth.checkStore(Auth.storeId(req))
      Auth.checkSignedIn(Auth.storeId(req))

      const product = await Product.findOneAndUpdate(
        { _id: args.id },
        { ...args }
      )
      return product
    },

    deleteProduct: async (root, { id }, { req }, info) => {
      Auth.checkStore(Auth.storeId(req))
      Auth.checkSignedIn(Auth.storeId(req))

      await Product.findOneAndDelete(id)

      return true
    }
  }
}
