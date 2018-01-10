// @flow
import 'babel-polyfill'
import React from 'react'
// $FlowFixMe
import { hydrate } from 'react-dom' // https://github.com/facebook/flow/pull/5074
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'
import configureStore from '../shared/configureStore'
import { loadState, saveState } from '../shared/utils/localStorage'
import App from './App'

const rootElement = document.getElementById('root')
const state = loadState()
const store = configureStore(state)

store.subscribe(() => saveState(store.getState()))

const renderApp = Component => {
  hydrate(
    <Provider store={store}>
      <AppContainer>
        <Component />
      </AppContainer>
    </Provider>,
    rootElement
  )
}

renderApp(App)

if (module.hot) {
  module.hot.accept('./App', () => {
    renderApp(require('./App').default)
  })
}
