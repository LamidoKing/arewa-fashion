import { Schema, model } from 'mongoose'

const { ObjectId } = Schema.Types

const chatSchema = new Schema({
  title: String,
  users: [{
    type: ObjectId,
    ref: 'User'
  }],
  lasstMessage: {
    type: ObjectId,
    ref: 'Message'
  }
}, {
  timestamps: true
})

const chat = model('chat', chatSchema)

export default chat
