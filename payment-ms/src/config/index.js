import { env } from 'process'

const {
  REDIS_HOST,
  REDIS_PORT,
  SERVER_PORT
} = env

export const config = {
  serverPort: SERVER_PORT,
  redisHost: REDIS_HOST,
  redisPort: REDIS_PORT
}
