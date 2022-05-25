import { Queue } from 'bullmq'
import { redis } from '../clients/index.js'

const NAME_QUEUE = 'Stock.Update'

export const stockUpdateQueue = new Queue(
  NAME_QUEUE,
  {
    connection: redis,
    defaultJobOptions: {
      removeOnComplete: 100
    }
  }
)
