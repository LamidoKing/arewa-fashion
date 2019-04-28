import { ApolloServer } from 'apollo-server-express'
import mongoose from 'mongoose'
import express from 'express'
import session from 'express-session'
import connectMongoDBSession from 'connect-mongodb-session'
import typeDefs from './typeDefs'
import resolvers from './resolvers'
import {
  PORT, PROD, DB_USERNAME, DB_PASSWORD,
  DB_HOST, DB_PORT, DB_NAME, SESS_NAME,
  SESS_SECRET, SESS_LIFETIME, SESS_COLLECTION
} from './config'
import http from 'http'
import schemaDirectives from './CustomDirective'

(async () => {
  try {
    await mongoose.connect(
      `mongodb://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
      {
        useNewUrlParser: true
      }
    )

    const app = express()

    app.disable('x-powered-by')
    const MongoDBStore = connectMongoDBSession(session)
    const store = new MongoDBStore({
      uri: `mongodb://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
      collection: SESS_COLLECTION
    })

    app.use(session({
      store,
      name: SESS_NAME,
      secret: SESS_SECRET,
      resave: false,
      rolling: true,
      saveUninitialized: false,
      cookie: {
        maxAge: parseInt(SESS_LIFETIME),
        sameSite: true,
        secure: PROD
      }
    }))

    const server = new ApolloServer({
      typeDefs,
      resolvers,
      schemaDirectives,
      playground: {
        settings: {
          'request.credentials': 'include'
        }
      },
      context: ({ req, res }) => ({ req, res })
    })

    server.applyMiddleware({ app, cors: false })

    const httpServer = http.createServer(app)
    server.installSubscriptionHandlers(httpServer)

    httpServer.listen({ port: PORT }, () => {
      console.log(`http://localhost:${PORT}${server.graphqlPath}`)
      console.log(` ws://localhost:${PORT}${server.subscriptionsPath}`)
    }
    )
  } catch (e) {
    console.error(e)
  }
})()
