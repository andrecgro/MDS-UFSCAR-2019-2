import React from 'react'
import { connect } from 'react-redux'
import {
  Box,
  Typography,
  Container,
  Grid,
  Avatar
} from '@material-ui/core'

function Me ({ userAuth, history }) {
  const defaultPhoto = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTK1J-i3ZrWnicHdauDJ1ZUN9laTSlb1xG0bhlf9a484BGIL2JL'

  const { displayName, photoURL } = userAuth
  return (
    <Box>
      <Container style={{ marginTop: '10px' }}>
        <Grid container justify='center' alignItems='center' direction='column' style={{ flexGrow: 1 }}>
          <Avatar
            alt={displayName}
            src={photoURL || defaultPhoto}
            style={{ width: '200px', height: '200px' }}
          />
          <Typography variant='h4' component='h1'>
            {displayName}
          </Typography>
          <Typography variant='body1'>
            email@test.com
          </Typography>
          <Typography variant='body2' align='center' color='secondary'>
            Versão 1.0.0
          </Typography>
        </Grid>
      </Container>
    </Box>
  )
}

const mapStateToProps = state => {
  return { userAuth: state.userAuth }
}

export default connect(mapStateToProps, null)(Me)
