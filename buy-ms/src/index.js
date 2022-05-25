
import 'dotenv/config'
import server from './server.js'
import { config } from './config/index.js'

const PORT = config.serverPort || 3000

server.listen(PORT, () => {
  console.log(`Buy MS - Server on http://localhost:${PORT}`)
})
