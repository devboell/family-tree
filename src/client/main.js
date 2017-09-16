import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from 'react-apollo'
import { AppContainer } from 'react-hot-loader' // eslint-disable-line import/no-extraneous-dependencies
import { BrowserRouter } from 'react-router-dom'
import App from 'components/App'
import './globalStyles'

import initStore from './initStore'
import initClient from './initClient'

const client = initClient
const store = initStore(client)

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <ApolloProvider client={client} store={store}>
        <BrowserRouter>
          <Component />
        </BrowserRouter>
      </ApolloProvider>
    </AppContainer>,
    document.getElementById('main'),
  )
}

render(App)

if (module.hot) {
  module.hot.accept('components/App', () => { render(App) })
}
