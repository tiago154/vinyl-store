import { Worker } from 'bullmq'
import { redis } from '../clients/index.js'
import { updateStatusOrder, updateProductsOutStock } from '../fake-database/index.js'

const STOCK_CHECK_NAME = 'Order.Update'

const orderUpdate = new Worker(
  STOCK_CHECK_NAME,
  async (job) => {
    const { orderId, status, productsOutStock } = job.data

    console.log('Atualizando pedido: ', orderId)

    updateProductsOutStock(orderId, productsOutStock)

    updateStatusOrder(orderId, status)
  },
  {
    connection: redis
  }
)

const orderUpdateWorker = () => orderUpdate

export {
  orderUpdateWorker
}
