import React from 'react'
import { Switch, Route } from 'react-router-dom'

import ListPage from './Pages/ListPage'
import WorkPage from './Pages/WorkPage'
import AboutPage from './Pages/AboutPage'

const NotFound = () => (
  <div>Page NotFound</div>
)

const App = () => (
  <>
    <Switch>
      <Route exact path="/" component={ListPage} />
      <Route exact path="/about" component={AboutPage} />
      <Route exact path="/work/:id" component={WorkPage} />
      <Route component={NotFound} />
    </Switch>
  </>
)

export default App
