import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import App from '../App'
import Register from '../Pages/Register'
import Main from '../Pages/Main'
import Orders from '../Components/Orders'
import HistoryOrders from '../Components/Orders/HistoricoPedidos'
import FutureOrders from '../Components/Orders/PedidosAgendados'

export default function Routes () {
  return (
    <BrowserRouter>
      <Route path='/' exact component={Main} />
      <Route path='/register' exact component={Register} />
      <Route path='/home' exact component={App} />
      <Route path='/orders' exact component={Orders} />
      <Route path='/scheduled' exact component={FutureOrders} />
      <Route path='/history' exact component={HistoryOrders} />
    </BrowserRouter>
  )
}
