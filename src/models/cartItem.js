import mongoose from 'mongoose'

const cartSchema = new mongoose.Schema({
  productId: {
    type: String,
    validate: {
      validator: productId => Cart.dontExist({ productId }),
      message: ({ value }) => `Product ${value} has already been taken.`
    }
  }

},
{
  timestamps: true
})

cartSchema.statics.dontExist = async function (options) {
  return await this.where(options).countDocuments() === 0
}

const Cart = mongoose.model('Cart', cartSchema)

export default Cart
