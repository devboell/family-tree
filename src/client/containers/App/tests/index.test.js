import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

import initialState from 'data/test/artists.json'
import App from '../index'

const middlewares = []
const mockStore = configureStore(middlewares)
const store = mockStore({ app: { artists: initialState } })

const mountWithRouterEntries = entries =>
  mount(
    <MemoryRouter initialEntries={entries}>
      <Provider store={store}>
        <App />
      </Provider>
    </MemoryRouter>,
    )

describe('App component', () => {
  it('has 4 ListItems, with path /', () => {
    const wrapper = mountWithRouterEntries(['/'])
    expect(wrapper.find('ListItem')).toHaveLength(4)
  })

  it('has 1 Introduction, with path /', () => {
    const wrapper = mountWithRouterEntries(['/'])
    expect(wrapper.find('Introduction')).toHaveLength(1)
  })

  it('has 8 GalleryItems, with path /heroshige', () => {
    const wrapper = mountWithRouterEntries(['/heroshige'])
    expect(wrapper.find('GalleryItem')).toHaveLength(8)
  })

  it('has 1 PaintingViewer, with path /heroshige/sokokura.jpg', () => {
    const wrapper = mountWithRouterEntries(['/heroshige/sokokura.jpg'])
    expect(wrapper.find('PaintingViewer')).toHaveLength(1)
  })
})
