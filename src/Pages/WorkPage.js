import React from 'react'
import { withRouter } from 'react-router-dom'

import DefaultLayout from './DefaultLayout'

const WorkPage = ({ match: { params: { id } } }) => (
  <DefaultLayout>
    {`work page for ${id}`}
  </DefaultLayout>
)

export default withRouter(WorkPage)
