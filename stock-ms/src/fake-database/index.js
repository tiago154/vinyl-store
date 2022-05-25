const products = [
  { id: 1, quantity: 12 },
  { id: 2, quantity: 5 },
  { id: 3, quantity: 1 },
  { id: 4, quantity: 0 }
]

export const getProduct = id => products.find(({ id: productId }) => productId === id)

export const updateQuantityProduct = (id, valueToDecrease) => {
  const product = getProduct(id)

  if (valueToDecrease > product.quantity) return false

  product.quantity -= valueToDecrease

  return true
}
