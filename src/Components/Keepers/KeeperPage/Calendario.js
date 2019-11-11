import React, { useState } from 'react'
import { Button } from '@material-ui/core/'
import { makeStyles } from '@material-ui/core/styles'
import { DatePicker } from '@material-ui/pickers'

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
  },
  button: {
    fontWeight: 'bolder',
    fontSize: '1rem',
    marginTop: '10px'
  }
}))

export default function KeeperCard () {
  const classes = useStyles()
  const [date, changeDate] = useState(new Date())

  return (
    <div>
      <DatePicker
        variant='static'
        openTo='date'
        value={date}
        onChange={changeDate}
        autoOk
      />

      <Button variant='contained' color='primary' aria-label='add' className={classes.button} fullWidth>
       Contratar
      </Button>
    </div>
  )
}
