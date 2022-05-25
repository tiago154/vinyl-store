import express from 'express'
import routes from './routes/index.js'
import { orderUpdateWorker } from './workers/order-update.js'

const server = express()

server.use(express.json())

server.use('/api', routes)

server.use('/', async (req, res) => {
  res.send('Order MS - Server on')
})

orderUpdateWorker()

export default server
