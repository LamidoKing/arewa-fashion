import { Schema, model } from 'mongoose'

const { ObjectId } = Schema.Types

const messageSchema = new Schema({
  body: String,
  sender: {
    type: ObjectId,
    ref: 'User'
  },
  chat: {
    type: ObjectId,
    ref: 'Chat'
  }
}, {
  timestamps: true
})

const message = model('message', messageSchema)

export default message
