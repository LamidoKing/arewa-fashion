export const {
  PORT = 4000,
  NODE_ENV = 'development',
  DB_USERNAME = 'phantom',
  DB_PASSWORD = 'fashion1989',
  DB_HOST = 'ds141490.mlab.com',
  DB_PORT = 41490,
  DB_NAME = 'arewafashion',
  APP_SECRET = 'phantom',

  SESS_NAME = 'sid',
  SESS_SECRET = 'ssh!secret!',
  SESS_LIFETIME = 1000 * 60 * 60 * 2,
  SESS_COLLECTION = 'mySessions'
} = process.env

export const PROD = NODE_ENV === 'production'
