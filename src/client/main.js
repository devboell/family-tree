import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader' // eslint-disable-line import/no-extraneous-dependencies
import { BrowserRouter } from 'react-router-dom'
import App from './containers/App'

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <BrowserRouter>
        <Component />
      </BrowserRouter>
    </AppContainer>,
    document.getElementById('main'),
  )
}

render(App)

if (module.hot) {
  module.hot.accept('./containers/App', () => { render(App) })
}
