import 'dotenv/config'
import server from './server.js'
import { config } from './config/index.js'

const PORT = config.serverPort || 3001

server.listen(PORT, () => {
  console.log(`Stock MS - Server on http://localhost:${PORT}`)
})
