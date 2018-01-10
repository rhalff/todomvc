import { createStore } from 'redux'
import thunk from 'redux-thunk'

import configureStoreDevelopment from './configureStoreDevelopment'
import configureStoreProduction from './configureStoreProduction'
import rootReducer from './reducers'

const isDevelopment = process.env.NODE_ENV !== 'production'

export default function configureStore(initialState) {
  const middleware = [thunk]

  if (isDevelopment) {
    return createStore(
      rootReducer,
      initialState,
      configureStoreDevelopment(middleware)
    )
  }
  return createStore(
    rootReducer,
    initialState,
    configureStoreProduction(middleware)
  )
}
