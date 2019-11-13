import React, { useState, useEffect } from 'react'
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
import { withSnackbar } from 'notistack'

function Me ({ userAuth, history, enqueueSnackbar }) {
  const defaultPhoto = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTK1J-i3ZrWnicHdauDJ1ZUN9laTSlb1xG0bhlf9a484BGIL2JL'

  const { displayName, photoURL, email } = userAuth
  const [upload, setUpload] = useState(null)
  const [photo, setPhoto] = useState(defaultPhoto)

  useEffect(() => {
    if (photoURL !== null) {
      setPhoto(photoURL)
    }
  }, [photoURL])
  return (
    <Box>
      <Container style={{ marginTop: '10px' }}>
        <Grid container justify='center' alignItems='center' direction='column' style={{ flexGrow: 1 }}>
          <Grid item container justify='center' alignItems='flex-end' direction='row'>
            <Avatar
              alt={displayName}
              src={photo}
              style={{ width: '200px', height: '200px' }}
            />
            <label htmlFor='myInput'>
              <Input
                ref={(ref) => setUpload(ref)}
                type='file'
                accept='image/png, image/jpeg'
                style={{ display: 'none' }}
                id='myInput'
                onChange={event => {
                  setPhoto(URL.createObjectURL(event.target.files[0]))
                  FirebaseService.uploadImage(event.target.files[0])
                    .then((snapshot) => snapshot.ref.getDownloadURL().then(url => FirebaseService.updateProfile({ photoURL: url })))
                    .then(() => enqueueSnackbar('Imagem carregada!', { variant: 'success' }))
                    .catch(err => enqueueSnackbar(err.message, { variant: 'error' }))
                    .catch(() => setPhoto(defaultPhoto))
                }}
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
            <ListItem button>
              <ListItemText primary='Sair' onClick={() => FirebaseService.logout()} />
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
  withSnackbar,
  withRouter
)(connect(mapStateToProps, null)(Me))
