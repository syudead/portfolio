import React from 'react'
import { render } from 'react-dom'


const App = () => (
  <div>app</div>
)







const body = document.querySelector('body')

render(
  <App />,
  body.insertBefore(document.createElement('div'), body.firstChild)
)
