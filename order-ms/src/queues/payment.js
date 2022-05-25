import { Queue } from 'bullmq'
import { redis } from '../clients/index.js'

const NAME_QUEUE = 'Payment.Update'

export const paymentUpdateQueue = new Queue(
  NAME_QUEUE,
  {
    connection: redis,
    defaultJobOptions: {
      removeOnComplete: 100
    }
  }
)
