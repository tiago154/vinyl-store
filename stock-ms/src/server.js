import express from 'express'
import { stockCheckWorker } from './workers/stock-check.js'
import { stockUpdateWorker } from './workers/stock-update.js'

const server = express()

server.use(express.json())

server.use('/', async (req, res) => {
  res.send('Stock MS - Server on')
})

stockCheckWorker()
stockUpdateWorker()

export default server
