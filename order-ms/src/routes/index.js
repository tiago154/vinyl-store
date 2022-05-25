import express from 'express'
import orders from './orders.js'

const router = express.Router()

router.use('/orders', orders)

export default router
