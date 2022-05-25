import { stockCheckQueue } from '../queues/index.js'
import { config } from '../config/index.js'
import axios from 'axios'

const createPurchase = async (_, response) => {
  const cartProducts = [
    { id: 1, name: 'Disco 1', quantity: 2 },
    { id: 2, name: 'Disco 2', quantity: 1 }
  ]

  const { data } = await axios.post(`${config.orderHost}/api/orders`, { products: cartProducts })

  await stockCheckQueue.add('stockCheck', {
    order: data.order
  })

  response.json({
    message: 'Service order created',
    id: data.order.id
  }).status(201)
}

export default {
  createPurchase
}
