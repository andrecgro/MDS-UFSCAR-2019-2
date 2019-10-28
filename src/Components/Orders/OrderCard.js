import React from 'react'
import { Typography, Grid } from '@material-ui/core/'
// import { makeStyles } from '@material-ui/core/styles'
import Rating from '@material-ui/lab/Rating'
import StarBorderIcon from '@material-ui/icons/StarBorder'

export default function OrderCard () {
  return (

    <Grid container direction='row' justify='space-between'>
      <Grid item>
        <Typography variant='overline' component='h2'>
          Profissional:
        </Typography>
        <Typography variant='h5' component='h2'>
          Arlete Ribeiro
        </Typography>
        <Rating
          name='customized-empty'
          value={4.5}
          precision={0.5}
          emptyIcon={<StarBorderIcon fontSize='inherit' />}
          readOnly
        />
      </Grid>
      <Grid item direction='column'>
        <Typography variant='overline' component='h2'>
          Data:
        </Typography>
        <Typography variant='h5' component='h2'>
          27/10/2019
        </Typography>
        <Typography variant='h6' component='h5'>
          R$ 120,00/diária
        </Typography>
      </Grid>
    </Grid>
  )
}
