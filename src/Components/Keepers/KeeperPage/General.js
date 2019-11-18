import React from 'react'
import { Typography, Paper, List, Grid, ListItem, ListItemText, Button, GridList, GridListTile, GridListTileBar, IconButton } from '@material-ui/core/'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  description: {
    fontSize: '0.72rem',
    width: 'fit-content',
    padding: '5px'
  },
  button: {
    fontWeight: 'bolder',
    fontSize: '1rem',
    marginTop: '10px'
  },
  root:{
    paddingTop: '0px'
  }
}))

function generate (element) {
  return [0, 1, 2].map(value =>
    React.cloneElement(element, {
      key: value
    })
  )
}

export default function General () {
  const classes = useStyles()
  const [dense] = React.useState(false)

  return (
    <div className={classes.root}>
      <Paper className={classes.description}>
        <Typography variant='h5' component='h3'>
          Descrição
        </Typography>
        <Typography component='p' className={classes.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis sapien in ex commodo tincidunt. Aenean ultricies tincidunt euismod. Praesent pretium, ipsum nec fringilla tincidunt, enim ex faucibus enim, vitae efficitur lorem massa at dolor. Donec neque leo, placerat quis accumsan eget, tempor sed enim.
        </Typography>
      </Paper>

      <Grid container>
        <Grid item xs={6}>
          <List dense={dense}>
            {generate(
              <ListItem>
                <ListItemText
                  primary='Secondary text'
                />
              </ListItem>
            )}
          </List>
        </Grid>
        <Grid item xs={6}>
          <List dense={dense}>
            {generate(
              <ListItem>
                <ListItemText
                  primary='Secondary text'
                />
              </ListItem>
            )}
          </List>
        </Grid>
      </Grid>

      <Button variant='contained' color='primary' aria-label='add' className={classes.button} fullWidth>
        Contratar
      </Button>
    </div>
  )
}
