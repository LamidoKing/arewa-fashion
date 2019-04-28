import { gql } from 'apollo-server-express'

export default gql` 
  extend type Query {
    store(id: ID!): Store! @guest
    stores: [Store!]! @guest
    storeMe: Store @store
  }

  extend type Mutation {
    signUpStore( 
      storeName: String!,
      email: String!,
      password: String!,
      image: String): AuthPayloadStore @guest
    storeLogin(email: String!, password: String!): AuthPayloadStore  @guest
    storeSignOut: Boolean @store
    updateStore(id: ID!, storeName: String, image: String): Store @store
    deleteStore(id: ID!): Boolean! @store
    
}

  type Store {
    id: ID!
    storeName: String!
    email: String!
    image: String
    address: String
    zipCode: String
    city: String
    phoneNumber: String
    openingHours: String
    createAt: String!
    products:[Product!]!
    
  }

  type AuthPayloadStore {
    token: String
    store: Store
}

`
