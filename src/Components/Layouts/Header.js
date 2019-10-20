import React from 'react'

import { AppBar, Toolbar, Typography, List, ListItem, ListItemIcon, ListItemText, Collapse } from '@material-ui/core'
import { MyLocation, ExpandLess, ExpandMore } from '@material-ui/icons'

export default function TopBar () {
  const [open, setOpen] = React.useState(true)
  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography variant='h5'>
          weKeeper
        </Typography>
      </Toolbar>
      <List
        component='nav'
      >
        <ListItem>
          <ListItemText secondary='Profissionais de limpeza em:' />
        </ListItem>
        <ListItem button onClick={handleClick}>
          <ListItemIcon>
            <MyLocation />
          </ListItemIcon>
          <ListItemText primary='São Carlos - SP' />
          {open ? <ExpandMore /> : <ExpandLess />}
        </ListItem>
        <Collapse in={!open} timeout='auto' unmountOnExit>
          <List component='div' disablePadding>
            <ListItem button>
              <ListItemText primary='Demais endereços...' />
            </ListItem>
          </List>
        </Collapse>
      </List>
    </AppBar>
  )
}
