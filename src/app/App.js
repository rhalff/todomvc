// @flow
import React from 'react'
import { BrowserRouter, Route, StaticRouter, Switch } from 'react-router-dom'
import routes from '../shared/routes'
import './App.global.scss'

type Props = {
  server?: boolean,
  location?: string,
  context?: Object
}

const App = ({ server, location, context }: Props) => {
  const routesMap = routes.map((route, i) => <Route key={i} {...route} />)

  let router

  if (server && location && context) {
    router = (
      <StaticRouter location={location} context={context}>
        <Switch>{routesMap}</Switch>
      </StaticRouter>
    )
  } else {
    router = (
      <BrowserRouter>
        <Switch>{routesMap}</Switch>
      </BrowserRouter>
    )
  }

  return <div>{router}</div>
}

export default App
