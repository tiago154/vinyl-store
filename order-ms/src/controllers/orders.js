import {
  createOrder as createOrderDatabase,
  getAllOrders,
  getOrder as getOrderDatabase,
  updateStatusOrder
} from '../fake-database/index.js'

const createOrder = async (request, response) => {
  const { products } = request.body

  const order = createOrderDatabase(products)

  response.json({ order }).status(201)
}

const listOrders = async (request, response) => {
  const orders = getAllOrders()

  response.json(orders)
}

const updateOrder = async (request, response) => {
  const { id, status } = request.body

  updateStatusOrder(id, status)

  response.json({ message: 'order updated' }).status(204)
}

const getOrder = async (request, response) => {
  const { id } = request.params
  const order = getOrderDatabase(id)

  response.json({ order })
}

export default {
  createOrder,
  listOrders,
  updateOrder,
  getOrder
}
