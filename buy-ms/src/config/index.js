import { env } from 'process'

const {
  REDIS_HOST,
  REDIS_PORT,
  SERVER_PORT,
  ORDER_HOST
} = env

export const config = {
  serverPort: SERVER_PORT,
  redisHost: REDIS_HOST,
  redisPort: REDIS_PORT,
  orderHost: ORDER_HOST
}
