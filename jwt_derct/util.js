import jwt from 'jsonwebtoken'
import { AuthenticationError } from 'apollo-server-express'
import { User } from './models'
import { APP_SECRET } from './config'

export const getUserId = (context) => {
  const Authorization = context.request.get('Authorization')
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '')
    const { userId } = jwt.verify(token, APP_SECRET)
    return userId
  }

  throw new Error('Not authenticated')
}

export const getStoreId = (context) => {
  const Authorization = context.req.get('Authorization')
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '')
    const { storeId } = jwt.verify(token, APP_SECRET)
    return storeId
  }

  throw new Error('Not authenticated')
}

export const getProductId = (context) => {
  const Authorization = context.req.get('Authorization')
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '')
    const { productId } = jwt.verify(token, APP_SECRET)
    return productId
  }

  throw new Error('Not authenticated')
}
