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

function a11yProps (index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`
  }
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
          <LinkTab label='Agendados' href='/scheduled' {...a11yProps(0)} />
          <LinkTab label='Histórico' href='/history' {...a11yProps(1)} />
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
