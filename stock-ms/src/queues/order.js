import { Queue } from 'bullmq'
import { redis } from '../clients/index.js'

const NAME_QUEUE = 'Order.Update'

export const orderUpdateQueue = new Queue(
  NAME_QUEUE,
  {
    connection: redis,
    defaultJobOptions: {
      removeOnComplete: 100
    }
  }
)
