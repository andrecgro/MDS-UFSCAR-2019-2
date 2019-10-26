import React from 'react'

import app from 'firebase/app'

import { config } from './config'

export default class Firebase {
  constructor () {
    app.initializeApp(config)
  }
}

export const FirebaseContext = React.createContext(null)
