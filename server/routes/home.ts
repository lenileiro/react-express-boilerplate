import { Router, Request, Response } from 'express'
import UrlRender from '../../utils/render'
const homeRoute = Router()

homeRoute.get('/', (req: Request, res: Response) => {
  const newLocal = {
    name: 'sam'
  }
  const markup = UrlRender(req.url, newLocal)

  res.render('index', {
    markup
  })
})

export default homeRoute
