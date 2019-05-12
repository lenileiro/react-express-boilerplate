import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { hydrate } from 'react-dom'

import App from '../src/App'

hydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('app')
)
