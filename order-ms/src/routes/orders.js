import express from 'express'
import { orderController } from '../controllers/index.js'

const router = express.Router()

router.post('/', orderController.createOrder)
router.get('/', orderController.listOrders)
router.patch('/', orderController.updateOrder)
router.get('/:id', orderController.getOrder)

export default router
