import React from 'react'
import { Typography, AppBar, Tabs, Tab, Box } from '@material-ui/core'
import HistoricoPedidos from './HistoricoPedidos'
import PedidosAgendados from './PedidosAgendados'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
}))

function TabPanel (props) {
  const { children, value, index, ...other } = props

  return (
    <Typography
      component='div'
      role='tabpanel'
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
}

function LinkTab (props) {
  return (
    <Tab
      component='a'
      onClick={event => {
        event.preventDefault()
      }}
      {...props}
    />
  )
}

export default function SchedulesList () {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Tabs
          variant='fullWidth'
          value={value}
          onChange={handleChange}
          aria-label='nav tabs example'
        >
          <LinkTab label='Agendados' />
          <LinkTab label='Histórico' />
        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0}>
        <PedidosAgendados />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <HistoricoPedidos />
      </TabPanel>
    </div>
  )
}
