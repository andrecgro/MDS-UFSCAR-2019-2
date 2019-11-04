import React from 'react'
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core'
import { Home, History, Person } from '@material-ui/icons'

export default function BottomNavBar ({ callBack }) {
  const [value, setValue] = React.useState('home')

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue)
        callBack(newValue)
      }}
      showLabels
    >
      <BottomNavigationAction label='Home' icon={<Home />} value='home' />
      <BottomNavigationAction label='Pedidos' icon={<History />} value='orders' />
      <BottomNavigationAction label='Minha Conta' icon={<Person />} value='me' />
    </BottomNavigation>
  )
}
