import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import App from '../App'
import Register from '../Pages/Register'

export default function Routes () {
  return (
    <BrowserRouter>
	  <Route path='/' exact component={Register} />
	  <Route path='/home' exact component={App} />
    </BrowserRouter>
  )
}
