import React from 'react'
import { Route } from 'react-router-dom'

import withTracker from './withTracker'

const CustomRoute = ({ component, ...props}) => (
  <Route component={withTracker(component)} {...props} />
)

export default CustomRoute
