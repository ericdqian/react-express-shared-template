import express from 'express'
import { testFunction } from 'shared/util2';
import testRouter from '@server/routers/testRouter'

const app = express();
const port = 8080;

const x = testFunction(1, 2 )
console.log('x', x)

app.get('/health', (req, res) => {
  res.send('Hello world')
})

app.use(testRouter)

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
