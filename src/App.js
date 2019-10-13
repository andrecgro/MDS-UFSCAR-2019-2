import React from 'react'
import { Header, Footer } from './Components/Layouts/'
import KeepersList from './Components/Keepers'
import { makeStyles } from '@material-ui/styles'

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
    height: '100%'
  },

  menu: {
    width: '100%'
  }
})

function App(props) {
  const classes = useStyles(props)

  return (
    <div className={classes.App}>
      <Header />
      <div className={classes.content}>
        <KeepersList />
      </div>
      <div className={classes.menu}>
        <Footer />
      </div>
    </div>
  )
}

export default App
