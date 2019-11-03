import React from 'react'
import { Typography, Paper } from '@material-ui/core/'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  description: {
    fontSize: '0.72rem',
    width: 'fit-content',
    padding: '5px'
  }
}))

export default function General () {
  const classes = useStyles()

  return (

    <Paper className={classes.description}>
      <Typography variant='h5' component='h3'>
        Descrição
      </Typography>
      <Typography component='p' className={classes.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis sapien in ex commodo tincidunt. Aenean ultricies tincidunt euismod. Praesent pretium, ipsum nec fringilla tincidunt, enim ex faucibus enim, vitae efficitur lorem massa at dolor. Donec neque leo, placerat quis accumsan eget, tempor sed enim.
      </Typography>
    </Paper>
  )
}
