import React from 'react'
import KeeperCard from './KeeperCard'
import ServicesCard from './ServicesCard'
import { Typography, Grid, GridList } from '@material-ui/core'

export default function KeepersList () {
  return (
    <GridList spacing={1} cols={1} direction='row' className='gridList'>

      <Grid item sm={12}>
        <ServicesCard />
      </Grid>

      <Grid item sm={12}>
        <Typography variant='h5' component='h2'>
          Profissionais
        </Typography>
        <KeeperCard />
        <KeeperCard />
        <KeeperCard />
        <KeeperCard />
        <KeeperCard />
      </Grid>
    </GridList>
  )
}
