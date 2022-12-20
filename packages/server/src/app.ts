import express from 'express'
import testRouter from '@server/routers/testRouter'
import { testServerUtil } from '@server/utils/testUtil';
import { testFunction } from '@webapp/shared/util2';

const app = express();
const port = 8080;

testServerUtil()

const x = testFunction(1, 2 )
console.log('x', x)

app.get('/health', (req, res) => {
  res.send('Hello world')
})

app.use(testRouter)

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
