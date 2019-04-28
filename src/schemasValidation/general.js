import Joi from 'joi'

const email = Joi.string().email().required().label('Email')
const username = Joi.string().alphanum().min(4).max(30).required().label('Username')
const name = Joi.string().max(254).required().label('Name')
const password = Joi.string().max(254).regex(/^(?=\S*[a-z])(?=\S*[A-Z])(?=\S*\d)(?=\S*[^\w\s])\S{8,30}$/).label('Password').options({
  language: {
    string: {
      regex: {
        base: 'must have at least one lowercase letter, one uppercase latter, one digit, one speacial charter'
      }
    }
  }
})

export {
  email,
  username,
  name,
  password
}
