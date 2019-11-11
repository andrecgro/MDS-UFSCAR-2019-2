import React from 'react'
import { Grid, ListItem } from '@material-ui/core/'
import OrderCard from './OrderCard'
import { makeStyles } from '@material-ui/core/styles'
import { withRouter } from 'react-router'
import { compose } from 'recompose'

const useStyles = makeStyles(theme => ({
  listItem: {
    paddingRight: '0px!important',
    paddingLeft: '0px!important',
    borderBottom: '1px #cacaca solid'
  }
}))

function HistoricoPedidos ({ history }) {
  const classes = useStyles()

  return (

    <Grid container direction='row'>
      <ListItem className={classes.listItem} button component='a' onClick={() => history.push('/keeper')}>
        <OrderCard />
      </ListItem>
    </Grid>
  )
}

export default compose(
  withRouter
)(HistoricoPedidos)
