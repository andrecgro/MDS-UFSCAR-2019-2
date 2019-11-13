import React, { useState } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { compose } from 'recompose'

import {
  Box,
  Typography,
  Container,
  Grid,
  Avatar,
  List,
  ListItem,
  ListItemText,
  Fab,
  Input
} from '@material-ui/core'
import { Edit } from '@material-ui/icons'

import FirebaseService from '../../Services/Firebase'

function Me ({ userAuth, history }) {
  const defaultPhoto = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTK1J-i3ZrWnicHdauDJ1ZUN9laTSlb1xG0bhlf9a484BGIL2JL'

  const { displayName, photoURL, email } = userAuth
  const [upload, setUpload] = useState(null)
  return (
    <Box>
      <Container style={{ marginTop: '10px' }}>
        <Grid container justify='center' alignItems='center' direction='column' style={{ flexGrow: 1 }}>
          <Grid item container justify='center' alignItems='flex-end' direction='row'>
            <Avatar
              alt={displayName}
              src={photoURL || defaultPhoto}
              style={{ width: '200px', height: '200px' }}
            />
            <label htmlFor='myInput'>
              <Input
                ref={(ref) => setUpload(ref)}
                type='file'
                style={{ display: 'none' }}
                id='myInput'
              />
              <Fab color='primary' aria-label='edit' style={{ marginLeft: '-50px' }} onClick={(e) => upload.click()}>
                <Edit />
              </Fab>
            </label>
          </Grid>
          <Typography variant='h4' component='h1'>
            {displayName}
          </Typography>
          <Typography variant='body1'>
            {email}
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary='Sair' button onClick={() => FirebaseService.logout()} />
            </ListItem>
          </List>
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

export default compose(
  withRouter
)(connect(mapStateToProps, null)(Me))
