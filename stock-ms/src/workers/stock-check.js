import { Worker } from 'bullmq'
import { redis } from '../clients/index.js'
import { getProduct } from '../fake-database/index.js'
import { paymentUpdateQueue } from '../queues/index.js'

const STOCK_CHECK_NAME = 'Stock.Check'

const stockCheck = new Worker(
  STOCK_CHECK_NAME,
  async (job) => {
    const { order } = job.data

    console.log('Checando estoque: ', order.id)

    const productsOutStock = order.products.filter(product => {
      const stockProduct = getProduct(product.id)
      return product.quantity > stockProduct.quantity || stockProduct.quantity < 1
    })
    console.log('productsOutStock', productsOutStock)
    await paymentUpdateQueue.add('paymentUpdate', {
      orderId: order.id,
      products: order.products,
      productsOutStock
    })
  },
  {
    connection: redis
  }
)

const stockCheckWorker = () => stockCheck

export {
  stockCheckWorker
}
