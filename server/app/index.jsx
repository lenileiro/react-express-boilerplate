import React from 'react'
import { renderToString } from 'react-dom/server'
import express, { Request, Response } from 'express'
import { StaticRouter } from 'react-router-dom'
import compression from 'compression'
import cors from 'cors'
import * as expbs from 'express-handlebars'

import App from '../../src/App'

const app = express()
app.engine('handlebars', expbs())
app.set('view engine', 'handlebars')

app.use(compression())
app.use(cors())
app.use(express.static('public'))

app.get('/', (req, res) => {
  const newLocal = {
    name: 'sam'
  }
  const markup = renderToString(
    <StaticRouter location={req.url} context={newLocal}>
      <App />
    </StaticRouter>
  )
  res.render('index', {
    markup: markup
  })
})

app.get('/about', (req, res) => {
  const newLocal = {
    name: 'sam'
  }
  const markup = renderToString(
    <StaticRouter location={req.url} context={newLocal}>
      <App />
    </StaticRouter>
  )

  res.render('index', {
    markup: markup
  })
})

export { app }
