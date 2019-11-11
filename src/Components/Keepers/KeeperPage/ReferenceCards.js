import React from 'react'
import { Typography, Grid } from '@material-ui/core/'
// import { makeStyles } from '@material-ui/core/styles'
import Rating from '@material-ui/lab/Rating'
import StarBorderIcon from '@material-ui/icons/StarBorder'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  item: {
    borderBottom: '1px #cacaca solid',
    paddingBottom: '3px'
  }
}))

export default function ReferenceCard () {
  const classes = useStyles()

  return (

    <Grid container direction='column' justify='space-between' className={classes.item}>
      <Grid item>
        <Typography variant='h6' component='h6'>
          Marcia Mendes da Silva
        </Typography>
        <Typography variant='body2'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis sapien in ex commodo tincidunt.
        </Typography>
      </Grid>

      <Grid container item direction='row' justify='space-between' alignItems='center'>
        <Rating
          name='customized-empty'
          value={4.5}
          precision={0.5}
          emptyIcon={<StarBorderIcon fontSize='inherit' />}
          readOnly
        />
        <Typography variant='body1' component='span'>
          27/10/2019
        </Typography>

      </Grid>
    </Grid>
  )
}
