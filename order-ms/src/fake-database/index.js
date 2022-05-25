import { v4 as uuidv4 } from 'uuid'

const orders = []

export const getAllOrders = () => orders

export const getOrder = id => orders.find(({ id: orderId }) => orderId === id)

export const createOrder = products => {
  const newOrder = {
    id: uuidv4(),
    status: 'pending',
    products
  }

  orders.push(newOrder)

  return newOrder
}

export const updateStatusOrder = (id, status) => {
  const order = getOrder(id)

  if (!order) return false

  order.status = status

  return true
}

export const removeItemOrder = (id, productId) => {
  const order = getOrder(id)

  const indexProduct = order.products.findIndex(({ id }) === productId)

  if (indexProduct > -1) {
    orders.splice(indexProduct, 1)
  }
}

export const updateProductsOutStock = (id, productsOutStock) => {
  const { products } = getOrder(id)

  const idsOutStock = productsOutStock.map(({ id }) => id)

  for (const product of products) {
    if (idsOutStock.includes(product.id)) product.outStock = true
  }
}
