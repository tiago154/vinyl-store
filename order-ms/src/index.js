import 'dotenv/config'
import server from './server.js'
import { config } from './config/index.js'

const PORT = config.serverPort || 3003

server.listen(PORT, () => {
  console.log(`Order MS - Server on http://localhost:${PORT}`)
})
