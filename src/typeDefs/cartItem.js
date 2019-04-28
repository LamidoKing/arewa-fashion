import { gql } from 'apollo-server-express'

export default gql`
extend type Query {
    cartItems: [CartItem]
    cartItem(id: ID): CartItem
}

extend type Mutation {
    addToCart(productId: String!): CartItem!
    deleteCartItem(id: ID!): String
}

extend type Subscription {
    onNewCartItem: CartItem
}

type CartItem {
    id: ID!
    product: Product!
}
`
