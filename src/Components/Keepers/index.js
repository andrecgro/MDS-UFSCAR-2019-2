import React from 'react'
import KeeperCard from './KeeperCard'
import ServicesCard from './ServicesCard'
import { Container, Typography, List, ListItem } from '@material-ui/core'

export default function KeepersList () {
  return (
    <Container>
      <ServicesCard />
      <Typography variant='h5' component='h2'>
        Profissionais
      </Typography>
      <List>
        <ListItem>
          <KeeperCard />
        </ListItem>
        <ListItem>
          <KeeperCard />
        </ListItem>
        <ListItem>
          <KeeperCard />
        </ListItem>
        <ListItem>
          <KeeperCard />
        </ListItem>
        <ListItem>
          <KeeperCard />
        </ListItem>
      </List>
    </Container>
  )
}
