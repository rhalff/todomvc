// @flow
import React from 'react'
import { Provider } from 'react-redux'
import { matchPath } from 'react-router-dom'

import { renderToString } from 'react-dom/server'

import App from '../app/App'
import configureStore from '../shared/configureStore'
import routes from '../shared/routes'
import html from './html'

export default function serverRender() {
  return (req: express$Request, res: express$Response) => {
    const store = configureStore()

    const promises = routes.reduce((acc, route) => {
      if (
        matchPath(req.url, route) &&
        route.component &&
        route.component.initialAction
      ) {
        acc.push(
          Promise.resolve(
            store.dispatch(route.component.initialAction('server'))
          )
        )
      }

      return acc
    }, [])

    Promise.all(promises)
      .then(() => {
        const context = {}
        const initialState = store.getState()

        const markup = renderToString(
          <Provider store={store}>
            <App server location={req.url} context={context} />
          </Provider>
        )

        if (context.url) {
          res.redirect(301, context.url)
        } else {
          res.send(
            html({
              markup,
              initialState
            })
          )
        }
      })
      .catch(error => {
        console.log('Promise error: ', error); // eslint-disable-line
      })
  }
}
