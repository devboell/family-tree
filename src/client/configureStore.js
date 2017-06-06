import { createStore, compose } from 'redux'

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

const configureStore = () => {
  const store = createStore(rootReducer, composeEnhancers())

  if (process.env.NODE_ENV !== 'production') {
    if (module.hot) {
      module.hot.accept('./reducers', () => {
        store.replaceReducer(rootReducer)
      })
    }
  }

  return store
}

export default configureStore
