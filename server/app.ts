import express from 'express'
import compression from 'compression'
import cors from 'cors'
import expbs from 'express-handlebars'
import route from './routes'

const app: express.Application = express()
app.engine('handlebars', expbs())
app.set('view engine', 'handlebars')

app.use(compression())
app.use(cors())
app.use(express.static('public'))

app.use('/', route)

export { app }
