import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

import { AppBar, Toolbar, Typography, List, ListItem, ListItemIcon, ListItemText, Collapse, Button } from '@material-ui/core'
import { MyLocation, ExpandLess, ExpandMore } from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1

  },
  menuButton: {
    marginRight: theme.spacing(2)

  },
  title: {
    flexGrow: 1

  },
  local: {
    fontSize: '0.5rem'
  }
}))

export default function TopBar () {
  const [open, setOpen] = React.useState(true)
  const handleClick = () => {
    setOpen(!open)
  }

  const classes = useStyles()

  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography variant='h5' className={classes.title}>
          weKeeper
        </Typography>

        <Button onClick={handleClick}>
          <ListItemIcon>
            <MyLocation />
          </ListItemIcon>
          <ListItemText className={classes.local} primary='São Carlos - SP' />
          {open ? <ExpandMore /> : <ExpandLess />}
        </Button>
      </Toolbar>
      <Collapse in={!open} timeout='auto' unmountOnExit>
        <List component='div' disablePadding>
          <ListItem button>
            <ListItemText primary='Demais endereços...' />
          </ListItem>
        </List>
      </Collapse>
    </AppBar>
  )
}
