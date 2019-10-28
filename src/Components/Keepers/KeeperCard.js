import React from 'react'
import { Typography, Avatar, Grid } from '@material-ui/core/'
import { makeStyles } from '@material-ui/core/styles'
import Rating from '@material-ui/lab/Rating'
import StarBorderIcon from '@material-ui/icons/StarBorder'

const useStyles = makeStyles(theme => ({
  features: {
    marginRight: '5px'
  },
  avatar: {
    width: 60,
    height: 60,
    margin: 0
  },
  services: {
    fontSize: '0.72rem',
    width: 'fit-content'
  }
}))

export default function KeeperCard () {
  const classes = useStyles()

  return (

    <Grid container direction='row'>
      <Grid item xs={3}>
        <Avatar
          alt='Arlete Ribeiro'
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTK1J-i3ZrWnicHdauDJ1ZUN9laTSlb1xG0bhlf9a484BGIL2JL'
          className={classes.avatar}
        />
      </Grid>
      <Grid item xs={9} direction='column'>
        <Typography variant='h5' component='h2'>
          Arlete Ribeiro
        </Typography>
        <Grid container item direction='row'>
          <Grid item className={classes.features}>
            <Typography variant='caption' component='h2'>
              Lavagem de Roupas
            </Typography>
            <Typography variant='caption' component='h5' className={classes.services}>
              Limpeza pesada
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='caption' component='h5' className={classes.services}>
              Preparação de refeições
            </Typography>
            <Typography variant='caption' component='h5' className={classes.services}>
              Limpeza de janelas
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid container item direction='row' justify='space-between'>
        <Rating
          name='customized-empty'
          value={4.5}
          precision={0.5}
          emptyIcon={<StarBorderIcon fontSize='inherit' />}
          readOnly
        />
        <Typography variant='h6' component='h5'>
          R$ 120,00/diária
        </Typography>
      </Grid>
    </Grid>
  )
}
