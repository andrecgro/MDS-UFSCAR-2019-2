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
  root2: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)'
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

  const tileData = [
    {
      img: 'http://br.web.img3.acsta.net/r_640_360/newsv7/19/02/14/16/55/5040184.jpg',
      title: 'John Doe',
      author: 'John Doe Author'
    },
    {
      img: 'http://br.web.img2.acsta.net/r_640_480/newsv7/19/02/14/17/48/2006236.png',
      title: 'John Doe',
      author: 'John Doe Author'
    },
    {
      img: 'http://br.web.img3.acsta.net/r_640_360/newsv7/19/02/14/16/55/5040184.jpg',
      title: 'John Doe',
      author: 'John Doe Author'
    },
    {
      img: 'http://br.web.img2.acsta.net/r_640_480/newsv7/19/02/14/17/48/2006236.png',
      title: 'John Doe',
      author: 'John Doe Author'
    }, {
      img: 'http://br.web.img3.acsta.net/r_640_360/newsv7/19/02/14/16/55/5040184.jpg',
      title: 'John Doe',
      author: 'John Doe Author'
    },
    {
      img: 'http://br.web.img2.acsta.net/r_640_480/newsv7/19/02/14/17/48/2006236.png',
      title: 'John Doe',
      author: 'John Doe Author'
    }
  ]

  return (
    <div>
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

      <div className={classes.root2}>
        <GridList cols={3.5}>
          {tileData.map(tile => (
            <GridListTile key={tile.img}>
              <img src={tile.img} alt={tile.title} />
              <GridListTileBar
                title={tile.title}
                classes={{
                  root: classes.titleBar,
                  title: classes.title
                }}
                actionIcon={
                  <IconButton aria-label={`star ${tile.title}`} />
                }
              />
            </GridListTile>
          ))}
        </GridList>
      </div>

      <Button variant='contained' color='primary' aria-label='add' className={classes.button} fullWidth>
        Contratar
      </Button>
    </div>
  )
}
