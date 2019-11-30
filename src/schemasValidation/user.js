import Joi from 'joi'
import { email, username, name, password } from './general'

export const signUp = Joi.object().keys({
  email, username, name, password
})

export const signIn = Joi.object().keys({
  email, password
})
