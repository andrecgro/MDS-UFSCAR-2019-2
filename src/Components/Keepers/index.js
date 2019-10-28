import React from 'react'
import KeeperCard from './KeeperCard'
import ServicesCard from './ServicesCard'
import { Container, Typography, List, ListItem } from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  listItem: {
    paddingRight: '0px!important',
    paddingLeft: '0px!important',
    borderBottom: '1px #cacaca solid'
  }
}))

export default function KeepersList () {
  const classes = useStyles()

  return (
    <Container>
      <ServicesCard />
      <Typography variant='h5' component='h2'>
        Profissionais
      </Typography>
      <List>
        <ListItem className={classes.listItem} button component='a' href='./KeeperPage'>
          <KeeperCard />
        </ListItem>
        <ListItem className={classes.listItem}>
          <KeeperCard />
        </ListItem>
        <ListItem className={classes.listItem}>
          <KeeperCard />
        </ListItem>
        <ListItem className={classes.listItem}>
          <KeeperCard />
        </ListItem>
        <ListItem className={classes.listItem}>
          <KeeperCard />
        </ListItem>
      </List>
    </Container>
  )
}
