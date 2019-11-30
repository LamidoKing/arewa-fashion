import { SchemaDirectiveVisitor } from 'apollo-server-express'
import { defaultFieldResolver } from 'graphql'
import { ensureStoreSignedIn } from '../auth'

export default class AuthDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition (field) {
    const { resolve = defaultFieldResolver } = field

    field.resolve = function (...args) {
      const [ , , context ] = args

      ensureStoreSignedIn(context.req)

      return resolve.apply(this, args)
    }
  }
};
