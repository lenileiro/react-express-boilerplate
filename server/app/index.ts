import express, { Request, Response } from 'express'
import compression from 'compression'
import cors from 'cors'
import expbs from 'express-handlebars'
import UrlRender from '../../utils/render'

const app: express.Application = express()
app.engine('handlebars', expbs())
app.set('view engine', 'handlebars')

app.use(compression())
app.use(cors())
app.use(express.static('public'))

app.get('/', (req: Request, res: Response) => {
  const newLocal = {
    name: 'sam'
  }
  const markup = UrlRender(req.url, newLocal)
  res.render('index', {
    markup: markup
  })
})

app.get('/about', (req: Request, res: Response) => {
  const newLocal = {
    name: 'sam'
  }
  const markup = UrlRender(req.url, newLocal)

  res.render('index', {
    markup: markup
  })
})

export { app }
