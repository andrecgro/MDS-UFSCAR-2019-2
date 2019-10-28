import React from 'react'
import { Grid, ListItem } from '@material-ui/core/'
import OrderCard from './OrderCard'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  listItem: {
    paddingRight: '0px!important',
    paddingLeft: '0px!important',
    borderBottom: '1px #cacaca solid'
  }
}))

export default function HistoricoPedidos () {
  const classes = useStyles()

  return (

    <Grid container direction='row'>
      <ListItem className={classes.listItem} button component='a' href='./KeeperPage'>
        <OrderCard />
      </ListItem>
    </Grid>
  )
}
