import { gql } from 'apollo-server-express'

export default gql`
extend type Mutation {
  createChat(title: String, userIds: [ID!]!): Chat c
}
  type Chat {
    id: ID!
    title: String
    users: [User!]!
    messages: [Message!]!
    lastMessages: Message
    updatedAt: String!
    createdAt: String!
  }
`
