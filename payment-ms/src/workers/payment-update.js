import { Worker } from 'bullmq'
import { redis } from '../clients/index.js'
import { stockUpdateQueue } from '../queues/index.js'

const PAYMENT_UPDATE_NAME = 'Payment.Update'

const paymentUpdate = new Worker(
  PAYMENT_UPDATE_NAME,
  async (job) => {
    const { products, orderId, productsOutStock } = job.data

    console.log('Confirmando pagamento: ', orderId)

    await stockUpdateQueue.add('stockUpdate', { products, orderId, productsOutStock })
  },
  {
    connection: redis
  }
)

const paymentUpdateWorker = () => paymentUpdate

export {
  paymentUpdateWorker
}
