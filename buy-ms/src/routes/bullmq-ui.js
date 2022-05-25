import { createBullBoard } from '@bull-board/api'
import { BullMQAdapter } from '@bull-board/api/bullMQAdapter.js'
import { ExpressAdapter } from '@bull-board/express'

import { stockCheckQueue, paymentUpdateQueue, stockUpdateQueue, orderUpdateQueue } from '../queues/index.js'

const serverAdapter = new ExpressAdapter()

serverAdapter.setBasePath('/api/admin/queues')

createBullBoard({
  queues: [
    new BullMQAdapter(stockCheckQueue),
    new BullMQAdapter(paymentUpdateQueue),
    new BullMQAdapter(stockUpdateQueue),
    new BullMQAdapter(orderUpdateQueue)
  ],
  serverAdapter
})

export {
  serverAdapter
}
