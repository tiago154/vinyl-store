import express from 'express'

const router = express.Router()

router.get('/', (_, response) => {
  response.send('Buy MS - Server on')
})

export default router
