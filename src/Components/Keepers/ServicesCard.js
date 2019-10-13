import React from 'react'
import { Typography, Avatar, Paper, Grid } from '@material-ui/core/'

export default function ServicesCard() {
  return (
    <Paper>
      <Typography variant='h5' component='h2' gutterBottom>
        Filtrar por Serviços
      </Typography>
      <Grid container justify='center' direction='row' alignItems='center'>
        <Grid item xs={3}>
          <Avatar
            alt='Arlete Ribeiro'
            src='../Assets/Images/geral.png'
          />
        </Grid>
        <Grid item xs={3}>
          <Avatar
            alt='Arlete Ribeiro'
            src='../../Assets/Images/janela.png'
          />
        </Grid>
        <Grid item xs={3}>
          <Avatar
            alt='Arlete Ribeiro'
            src='../../Assets/Images/lavar.png'
          />
        </Grid>
        <Grid item xs={3}>
          <Avatar
            alt='Arlete Ribeiro'
            src='../../Assets/Images/passar.png'
          />
        </Grid>
      </Grid>
    </Paper>
  )
}
