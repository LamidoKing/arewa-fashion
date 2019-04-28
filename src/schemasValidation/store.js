import Joi from 'joi'
import { email, username as storeName, password } from './general'

export const storeSignUp = Joi.object().keys({
  email, storeName, password
})
