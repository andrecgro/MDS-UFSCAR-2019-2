import React from 'react'
import { connect } from 'react-redux'

import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import App from '../App'
import Register from '../Pages/Register'
import Main from '../Pages/Main'
import Orders from '../Components/Orders'
import HistoryOrders from '../Components/Orders/HistoricoPedidos'
import FutureOrders from '../Components/Orders/PedidosAgendados'
import KeeperPage from '../Components/Keepers/KeeperPage'
import { isAuthenticated } from '../utils/selectors'

function Routes ({ isAuthenticated }) {
  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (<Component {...props} />) : (<Redirect to={{ pathname: '/', state: { from: props.location } }} />)}
    />
  )
  return (
    <BrowserRouter>
      <Route path='/' exact component={Main} />
      <Route path='/register' exact component={Register} />
      <PrivateRoute path='/home' exact component={App} />
      <PrivateRoute path='/orders' exact component={Orders} />
      <PrivateRoute path='/scheduled' exact component={FutureOrders} />
      <PrivateRoute path='/history' exact component={HistoryOrders} />
      <PrivateRoute path='/keeper' exact component={KeeperPage} />
    </BrowserRouter>
  )
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: isAuthenticated(state)
  }
}

export default connect(mapStateToProps, null)(Routes)
