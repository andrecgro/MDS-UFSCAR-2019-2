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

export default function KeeperCard({name, score, price, services}) {
  const classes = useStyles()
  const services1 = services.splice(0,services.length/2)
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
          {name}
        </Typography>
        <Grid container item direction='row' justify='space-between'>
          <Grid item className={classes.features}>
            { services.map( item =>
                (
                  <Typography variant='p' component='p'>
                    {item}
                  </Typography>
                )
              )
            }
          </Grid>
          <Grid item className={classes.features}>
            { services1.map( item =>
                (
                  <Typography variant='p' component='p'>
                    {item}
                  </Typography>
                )
              )
            }
          </Grid>
        </Grid>
      </Grid>
      <Grid container item direction='row' justify='space-between'>
        <Rating
          name='customized-empty'
          value={score}
          precision={0.5}
          emptyIcon={<StarBorderIcon fontSize='inherit' />}
          readOnly
        />
        <Typography variant='h6' component='h5'>
          R$ {price}/diária
        </Typography>
      </Grid>
    </Grid>
  )
}
