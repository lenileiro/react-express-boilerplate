import { Router, Request, Response } from 'express'
import serialize from 'serialize-javascript'
import UrlRender from '../../utils/render'
import apiRoute from '../api'

const aboutRoute = Router()

aboutRoute.get('/', (req: Request, res: Response) => {
  const initialData = {
    name: 'sam'
  }
  const data = serialize(initialData)

  const markup = UrlRender(req.url, initialData)

  res.render('index', {
    markup,
    data
  })
})
aboutRoute.use('/api', apiRoute)

export default aboutRoute
