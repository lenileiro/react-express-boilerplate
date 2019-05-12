import { Router, Request, Response } from 'express'
import serialize from 'serialize-javascript'

import UrlRender from '../../utils/render'
import apiRoute from '../api'
const homeRoute = Router()

homeRoute.get('/', (req: Request, res: Response) => {
  const initialData = {
    name: 'sam'
  }
  const data = serialize(initialData)

  const results = UrlRender(req.url, initialData)
  console.log(results)
  res.render('index', {
    results,
    data
  })
})
homeRoute.use('/api', apiRoute)

export default homeRoute
