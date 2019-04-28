import { ApolloServer } from 'apollo-server-express'
import mongoose from 'mongoose'
import express from 'express'
import bodyParser from 'body-parser'
import jwt from 'express-jwt'
import typeDefs from './typeDefs'
import resolvers from './resolvers'
import { PORT, PROD, DB_USERNAME, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME, APP_SECRET } from './config'
import http from 'http'
(async () => {
  try {
    await mongoose.connect(
      `mongodb://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
      {
        useNewUrlParser: true
      }
    )

    const app = express()
    const auth = jwt({
      secret: APP_SECRET,
      credentialsRequired: false
    })
    app.use(bodyParser.json(), auth)
    app.disable('x-powered-by')

    const server = new ApolloServer({
      typeDefs,
      resolvers,
      playground: !PROD,
      context: req => ({
        ...req
      })
    })

    server.applyMiddleware({ app })

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
