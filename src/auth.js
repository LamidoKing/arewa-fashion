import { AuthenticationError } from 'apollo-server-express'
import { SESS_NAME } from './config'

export const attemptSignIn = async (email, password, account) => {
  const message = (param) => param === account ? 'No Account with that email, Please check and try again' : 'Incorrect password, Please check and try again'

  if (!account) {
    throw new AuthenticationError(message(account))
  }

  if (!await account.matchesPassword(password)) {
    throw new AuthenticationError(message(password))
  }

  return account
}

const userSignedIn = req => req.session.userId
const storeSignedIn = req => req.session.storeId
const check = req => userSignedIn(req) ? userSignedIn(req) : storeSignedIn(req)

const checkSignedIn = (signedIn) => {
  if (!signedIn) {
    throw new AuthenticationError('You must be signed in.')
  }
}

const checkSignedOut = (signedIn) => {
  if (signedIn) {
    throw new AuthenticationError('You are already signed in.')
  }
}

export const ensureSignedIn = req => checkSignedIn(userSignedIn(req))

export const ensureStoreSignedIn = req => checkSignedIn(storeSignedIn(req))

export const ensureSignedOut = req => checkSignedOut(check(req))

export const signOut = (req, res) => new Promise(
  (resolve, reject) => {
    req.session.destroy(err => {
      if (err) reject(err)

      res.clearCookie(SESS_NAME)

      resolve(true)
    })
  }
)

export const storeId = req => req.session.storeId
