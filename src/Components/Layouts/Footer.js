import React from 'react'
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core'
import { Home, History, Person } from '@material-ui/icons'

export default function BottomNavBar () {
  const [value, setValue] = React.useState(0)

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue)
      }}
      showLabels
    >
      <BottomNavigationAction label='Home' icon={<Home />} href='../index' />
      <BottomNavigationAction label='Pedidos' icon={<History />} href='../orders' />
      <BottomNavigationAction label='Minha Conta' icon={<Person />} href='#' />
    </BottomNavigation>
  )
}
