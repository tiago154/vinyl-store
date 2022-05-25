import { Worker } from 'bullmq'
import { redis } from '../clients/index.js'
import { updateQuantityProduct } from '../fake-database/index.js'
import { orderUpdateQueue } from '../queues/index.js'

const STOCK_UPDATE_NAME = 'Stock.Update'

const getStatus = (products, productsOutStock) => {
  if (products.length === productsOutStock.length) return 'canceled'
  if (products.length && productsOutStock.length) return 'preparing for delivery, but some items are out of stock'
  return 'preparing for delivery'
}

const stockUpdate = new Worker(
  STOCK_UPDATE_NAME,
  async (job) => {
    const { products, orderId, productsOutStock } = job.data

    console.log('Atualizando estoque: ', orderId)

    products.map((product) => updateQuantityProduct(product.id, product.quantity))

    const status = getStatus(products, productsOutStock)

    await orderUpdateQueue.add('orderUpdate', { orderId, status, productsOutStock })
  },
  {
    connection: redis
  }
)

const stockUpdateWorker = () => stockUpdate

export {
  stockUpdateWorker
}
