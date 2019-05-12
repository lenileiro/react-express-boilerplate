import express, { Request, Response } from 'express'
import compression from 'compression'
import cors from 'cors'
import expbs from 'express-handlebars'

import homeRoute from './routes/home'
import aboutRoute from './routes/about'

const app: express.Application = express()
app.engine('handlebars', expbs())
app.set('view engine', 'handlebars')

app.use(compression())
app.use(cors())
app.use(express.static('public'))

app.use('/', homeRoute)

app.use('/about', aboutRoute)

export { app }
