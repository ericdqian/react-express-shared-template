import express from 'express';
import { testFunction } from '@webapp/shared/util2';

const router = express.Router()

router.use('/test', (req, res) => {
  const testSum = testFunction(1, 2)
  console.log('test sum', testSum)
  res.sendStatus(200)
})

export default router
