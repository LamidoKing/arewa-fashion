import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
  title: String,
  slogan: String,
  description: String,
  stars: Number,
  category: String,
  price: String,
  image: String,
  reviews: String,
  storeId: String

},
{
  timestamps: true
})

export default mongoose.model('Product', productSchema)
