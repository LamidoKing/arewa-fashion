import { gql } from 'apollo-server-express'

export default gql`
  extend type Query {
    product(id: ID!): Product @guest
    products: [Product!]! @guest
  }

  extend type Mutation {
    addProduct(
      title: String!,
      slogan: String!,
      description: String!,
      stars: Int!,
      category: String!,
      price: String!,
      image: String!,
      storeId: String,
    ): Product! @store
    updateProduct(id: ID!
      title: String,
      slogan: String,
      description: String,
      stars: Int,
      category: String,
      price: String,
      image: String ): Product @store
    deleteProduct(id: ID!): Boolean! @store
  }

  type Product {
    id: ID!
    title: String!
    slogan: String!
    description: String!
    stars: Int!
    category: String!
    price: String!
    image: String!
    reviews: String
    createAt: String!
    storeId: String!
    store: Store!
  }
`
