import { Queue } from 'bullmq'
import { redis } from '../clients/index.js'

const STOCK_CHECK_NAME = 'Stock.Check'

export const stockCheckQueue = new Queue(
  STOCK_CHECK_NAME,
  {
    connection: redis,
    defaultJobOptions: {
      removeOnComplete: 100
    }
  }
)

const STOCK_UPDATE_NAME = 'Stock.Update'

export const stockUpdateQueue = new Queue(
  STOCK_UPDATE_NAME,
  {
    connection: redis,
    defaultJobOptions: {
      removeOnComplete: 100
    }
  }
)
