import Redis from 'ioredis'
import { config } from '../config/index.js'

const redis = new Redis({
  host: config.redisHost,
  port: config.redisPort,
  maxRetriesPerRequest: null,
  enableReadyCheck: false
})

redis.on('connect', () => {
  console.log(`Redis on - localhost:${config.redisPort}`)
})

export { redis }
