import React from 'react'
import { Header, Footer } from './Components/Layouts/'
import KeepersList from './Components/Keepers'
import { makeStyles } from '@material-ui/styles'
import { Paper } from '@material-ui/core'

const useStyles = makeStyles({
  App: {
    flexGrow: 1,
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  content: {
    width: '100%',
    height: 'calc(100% - 120px)',
    overflow: 'auto'
  },

  menu: {
    bottom: '0',
    height: '56',
    width: '100%'
  }

})

function App (props) {
  const classes = useStyles(props)

  return (
    <div className={classes.App}>
      <Header />
      <Paper className={classes.content}>
        <KeepersList />
      </Paper>
      <div className={classes.menu}>
        <Footer />
      </div>
    </div>
  )
}

export default App
