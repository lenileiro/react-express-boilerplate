import React from 'react'
import { renderToString } from 'react-dom/server'
import express, { Request, Response } from 'express'
import { StaticRouter } from 'react-router-dom'
import compression from 'compression'
import cors from 'cors'
import App from '../../shared/App'

const app = express()

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
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <title>SSR App</title>
            <script src="/bundle.js" defer></script>
        </head>
        <body>
            <div id="app">${markup}</div>
            <script defer>
                if('serviceWorker' in navigator){
                    try { 
                        navigator.serviceWorker.register('sws.js')
                    } catch (error){
                        console.log(error)
                    }
                }
            </script>
        </body>
    </html>
`)
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
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <title>SSR App</title>
            <script src="/bundle.js" defer></script>
        </head>
        <body>
            <div id="app">${markup}</div>
            <script defer>
                if('serviceWorker' in navigator){
                    try { 
                        navigator.serviceWorker.register('sws.js')
                    } catch (error){
                        console.log(error)
                    }
                }
            </script>
        </body>
    </html>
`)
})

export { app }
