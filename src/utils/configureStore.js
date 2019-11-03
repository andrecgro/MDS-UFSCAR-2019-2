import { createStore, applyMiddleware } from 'redux'

import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { createLogger } from 'redux-logger'

import thunk from 'redux-thunk'

import rootReducer from '../reducer/rootReducer'

const persistConfig = {
  key: 'root',
  storage
}

export const logger = createLogger({})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default () => {
  const store = createStore(persistedReducer, applyMiddleware(thunk, logger))
  const persistor = persistStore(store)
  return { store, persistor }
}
