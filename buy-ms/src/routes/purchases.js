import express from 'express'
import { purchasesController } from '../controllers/index.js'

const router = express.Router()

router.get('/', purchasesController.createPurchase)

export default router
