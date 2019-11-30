import mongoose from 'mongoose'
import { hash, compare } from 'bcryptjs'

const storeSchema = new mongoose.Schema({
  email: {
    type: String,
    validate: {
      validator: email => Store.dontExist({ email }),
      message: ({ value }) => `Email ${value} has already been taken.`
    }
  },
  storeName: {
    type: String,
    validate: {
      validator: storeName => Store.dontExist({ storeName }),
      message: ({ value }) => `Username ${value} has already been taken.`
    }
  },
  image: String,
  address: String,
  zipCode: String,
  city: String,
  phoneNumber: String,
  openingHours: String,
  password: String
},
{
  timestamps: true
})

storeSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await hash(this.password, 10)
  }
})

storeSchema.statics.dontExist = async function (options) {
  return await this.where(options).countDocuments() === 0
}

storeSchema.methods.matchesPassword = function (password) {
  return compare(password, this.password)
}

const Store = mongoose.model('Store', storeSchema)

export default Store
