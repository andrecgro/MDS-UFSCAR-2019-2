import React from 'react'
import StarBorderIcon from '@material-ui/icons/StarBorder'
import { List, Typography, Avatar, Grid, ListItemText, ListItem } from '@material-ui/core/'
import { Rating } from '@material-ui/lab'

export default function KeeperCard() {
  const dense = false

  return (
    <Grid container justify='center' alignItems='center'>
      <Grid item>
        <Avatar
          alt='Arlete Ribeiro'
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTK1J-i3ZrWnicHdauDJ1ZUN9laTSlb1xG0bhlf9a484BGIL2JL'
        />
      </Grid>
      <Grid item>
        <Typography variant='h5' component='h2'>
          Arlete Ribeiro
        </Typography>
        <Grid container justify='center' alignItems='center'>
          <Grid item>
            <div>
              <List dense={dense}>
                <ListItem>
                  <ListItemText secondary='Limpeza em geral' />
                </ListItem>
                <ListItem>
                  <ListItemText secondary='Preparação de Refeições' />
                </ListItem>
              </List>
            </div>
          </Grid>
          <Grid item>
            <div>
              <List dense={dense}>
                <ListItem>
                  <ListItemText secondary='Limpeza de armários' />
                </ListItem>
                <ListItem>
                  <ListItemText secondary='Lavagem de roupas' />
                </ListItem>
              </List>
            </div>
          </Grid>
        </Grid>
        <Grid container alignItems='center'>
          <Grid item>
            <Rating
              name='customized-empty'
              value={4.5}
              precision={0.5}
              emptyIcon={<StarBorderIcon fontSize='inherit' />}
            />
          </Grid>
          <Grid item>
            <Typography variant='h6' component='h2'>
              R$120,00 / dia
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
