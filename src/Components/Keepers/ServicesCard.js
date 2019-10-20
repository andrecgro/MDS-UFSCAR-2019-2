import React from 'react'
import { Container, Typography, Avatar, Grid } from '@material-ui/core/'

export default function ServicesCard () {
  return (
    <Container>
      <Typography variant='h5' component='h2'>
        Filtrar por Serviços
      </Typography>
      <Grid container direction='row' justify='space-around' alignItems='center'>
        <Grid item>
          <Avatar
            alt='Arlete Ribeiro'
            src='../Assets/Images/geral.png'
          />
        </Grid>
        <Grid item>
          <Avatar
            alt='Arlete Ribeiro'
            src='../../Assets/Images/janela.png'
          />
        </Grid>
        <Grid item>
          <Avatar
            alt='Arlete Ribeiro'
            src='../../Assets/Images/lavar.png'
          />
        </Grid>
        <Grid item>
          <Avatar
            alt='Arlete Ribeiro'
            src='../../Assets/Images/passar.png'
          />
        </Grid>
      </Grid>
    </Container>
  )
}
