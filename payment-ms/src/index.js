import 'dotenv/config'
import server from './server.js'
import { config } from './config/index.js'

const PORT = config.serverPort || 3002

server.listen(PORT, () => {
  console.log(`Payment MS - Server on http://localhost:${PORT}`)
})
