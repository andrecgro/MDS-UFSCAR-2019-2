import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import App from '../App'
import Register from '../Pages/Register'
import Main from '../Pages/Main'

export default function Routes () {
  return (
    <BrowserRouter>
      <Route path='/' exact component={Main} />
      <Route path='/register' exact component={Register} />
      <Route path='/home' exact component={App} />
    </BrowserRouter>
  )
}
