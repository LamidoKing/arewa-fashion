import { Schema, model } from 'mongoose'
import { hash, compare } from 'bcryptjs'

const { ObjectId } = Schema.Types
const userSchema = new Schema({
  email: {
    type: String,
    validate: {
      validator: email => User.dontExist({ email }),
      message: ({ value }) => `Email ${value} has already been taken.`
    }
  },
  username: {
    type: String,
    validate: {
      validator: username => User.dontExist({ username }),
      message: ({ value }) => `Username ${value} has already been taken.`
    }
  },
  name: String,
  password: String,
  chats: [{
    type: ObjectId,
    ref: 'Chat'
  }]
}, {
  timestamps: true
})

userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await hash(this.password, 10)
  }
})

userSchema.statics.dontExist = async function (options) {
  return await this.where(options).countDocuments() === 0
}

userSchema.methods.matchesPassword = function (password) {
  return compare(password, this.password)
}
const User = model('User', userSchema)

export default User
