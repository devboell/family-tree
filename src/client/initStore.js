import { createStore, compose, applyMiddleware } from 'redux'

import rootReducer from './reducers'


// If Redux DevTools Extension is installed use it, otherwise use Redux compose
/* eslint-disable no-underscore-dangle */
const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    /* istanbul ignore next */
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose
/* eslint-enable */

const initStore = (client) => {
  const store = createStore(
    rootReducer(client),
    {},
    composeEnhancers(applyMiddleware(client.middleware())))

  if (process.env.NODE_ENV !== 'production') {
    if (module.hot) {
      module.hot.accept('./reducers', () => {
        store.replaceReducer(rootReducer(client))
      })
    }
  }

  return store
}

export default initStore
