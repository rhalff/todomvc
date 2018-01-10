// @flow
import express from 'express'
import todos from './data/todos'

const router = express.Router()

router.get('/todos', (req: express$Request, res: express$Response) =>
  res.json(todos)
)

export default router
