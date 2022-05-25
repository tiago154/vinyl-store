import express from 'express'
import { paymentUpdateWorker } from './workers/payment-update.js'

const server = express()

server.use(express.json())

server.use('/', async (req, res) => {
  res.send('Payment MS - Server on')
})

paymentUpdateWorker()

export default server
