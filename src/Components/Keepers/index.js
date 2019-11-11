import React from 'react'
import KeeperCard from './KeeperCard'
import ServicesCard from './ServicesCard'
import HeaderKeeper from './HeaderKeeper'
import { Container, Typography, List, ListItem } from '@material-ui/core'
import { withRouter } from 'react-router'

import { makeStyles } from '@material-ui/core/styles'
import { compose } from 'recompose'

const useStyles = makeStyles(theme => ({
  listItem: {
    paddingRight: '0px!important',
    paddingLeft: '0px!important',
    borderBottom: '1px #cacaca solid'
  },
  content: {
    paddingTop: '74px'
  }
}))

function KeepersList ({ history }) {
  const classes = useStyles()

  return (
    <div>
      <HeaderKeeper />
      <Container className={classes.content}>
        <ServicesCard />
        <Typography variant='h5' component='h2'>
        Profissionais
        </Typography>
        <List>
          <ListItem className={classes.listItem} button component='a' onClick={() => history.push('/keeper')}>
            <KeeperCard />
          </ListItem>
          <ListItem className={classes.listItem} button component='a' onClick={() => history.push('/keeper')}>
            <KeeperCard />
          </ListItem>
          <ListItem className={classes.listItem} button component='a' onClick={() => history.push('/keeper')}>
            <KeeperCard />
          </ListItem>
          <ListItem className={classes.listItem} button component='a' onClick={() => history.push('/keeper')}>
            <KeeperCard />
          </ListItem>
          <ListItem className={classes.listItem} button component='a' onClick={() => history.push('/keeper')}>
            <KeeperCard />
          </ListItem>
        </List>
      </Container>
    </div>
  )
}

export default compose(
  withRouter
)(KeepersList)
