import express, { Request, Response } from 'express'
import compression from 'compression'
import cors from 'cors'

const app: express.Application = express()

app.use(compression())
app.use(cors())

app.get('/', (req: Request, res: Response) => {
  res.send('hello world')
})

export { app }
