import express from 'express'
import healthCheck from './health-check.js'
import purchases from './purchases.js'
import { serverAdapter } from './bullmq-ui.js'

const router = express.Router()

router.use('/purchases', purchases)
router.use('/health-check', healthCheck)
router.use('/admin/queues', serverAdapter.getRouter())

export default router
