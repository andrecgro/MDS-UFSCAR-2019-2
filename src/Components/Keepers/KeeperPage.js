import React from 'react'
import { Typography, AppBar, Tabs, Tab, Box, Grid, Avatar, Toolbar, IconButton } from '@material-ui/core'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Calendario from './KeeperPage/Calendario'
import Referencias from './KeeperPage/References'
import Geral from './KeeperPage/General'
import Rating from '@material-ui/lab/Rating'
import StarBorderIcon from '@material-ui/icons/StarBorder'
import { ArrowBack } from '@material-ui/icons'

const useStyles = makeStyles(theme => ({

  avatar: {
    width: 150,
    height: 150,
    margin: 0
  }
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

export default function KeeperPage ({ history }) {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div className={classes.root}>
      <AppBar position='static' padding='25px'>
        <Toolbar>
          <IconButton edge='start' color='inherit' onClick={() => history.goBack()}>
            <ArrowBack />
          </IconButton>
        </Toolbar>
        <Grid container direction='column' alignItems='center' justify='center' className='avatarContainer'>
          <Avatar
            alt='Arlete Ribeiro'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTK1J-i3ZrWnicHdauDJ1ZUN9laTSlb1xG0bhlf9a484BGIL2JL'
            className={classes.avatar}
          />
          <Typography variant='h5' component='h5' color='white'>
            Arlete Ribeiro
          </Typography>
        </Grid>
        <Grid container item direction='row' justify='space-between'>
          <Rating
            name='customized-empty'
            value={4.5}
            precision={0.5}
            emptyIcon={<StarBorderIcon fontSize='inherit' />}
            readOnly
          />

          <Typography variant='h6' component='h5' color='white'>
            R$ 120,00/diária
          </Typography>
        </Grid>
        <Tabs
          variant='fullWidth'
          value={value}
          onChange={handleChange}
          aria-label='nav tabs example'
        >
          <LinkTab label='Geral' href='/general' {...a11yProps(0)} />
          <LinkTab label='Agenda' href='/calendar' {...a11yProps(1)} />
          <LinkTab label='Referências' href='/references' {...a11yProps(0)} />
        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0}>
        <Geral />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Calendario />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Referencias />
      </TabPanel>
    </div>
  )
}
