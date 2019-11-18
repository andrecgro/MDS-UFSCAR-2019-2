import React, {useState, useEffect} from 'react'
import KeeperCard from './KeeperCard'
import ServicesCard from './ServicesCard'
import HeaderKeeper from './HeaderKeeper'
import { Container, Typography, List, ListItem } from '@material-ui/core'
import { withRouter } from 'react-router'
import FirebaseService from '../../Services/Firebase'

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

  const[diaristas, setDiaristas] = useState([])
  useEffect( ()=>{
    FirebaseService.getDataList('diaristas', (item) => {
      console.log('item fire:' + item)
      setDiaristas(item)
    })
  }, [])
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
          { diaristas.map(item => {
            const score = parseFloat(item.sum_score) / item.count_score
            return(
              <ListItem className={classes.listItem} button component='a' onClick={() => history.push('/keeper')}>
                  <KeeperCard name={item.name} price={item.price} services={item.services} score={score} />
              </ListItem>
            )
          }) }
        </List>
      </Container>
    </div>
  )
}

export default compose(
  withRouter
)(KeepersList)
