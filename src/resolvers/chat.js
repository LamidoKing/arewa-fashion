import Joi from 'joi'
import { createChat } from '../schemasValidation'
import { User, Chat } from '../models';
import { UserInputError } from 'apollo-server-express';

export default {
  Mutation: {
    createChat: async (root, args, { req }, info) => {
      const { userId } = req.session
      const { title, userIds } = args

      await Joi.validate(args, createChat(userId), { abortEarly: false })

      const foundIds = await User.where('_id').in(userIds).countDocuments()

      if (foundIds !== userIds.length) {
        throw new UserInputError('One or more IDs are invalid.')
      }

      userIds.push(userId)

      const chat = await Chat.create({ title, users: userIds })

      await User.updateMany({ id: { '$in': userIds } }, {
        $push: { chats: chat }
      })
      return chat
    }
  }
}
