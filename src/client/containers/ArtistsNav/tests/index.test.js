import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

import ConnectedArtistNav, { ArtistsNav } from '../index'
import initialState from './test_data'

const middlewares = []
const mockStore = configureStore(middlewares)

const props = {

  ...initialState,
  onSelect: jest.fn(),
}

it('ArtistsNav component snapshot', () => {
  const wrapper = shallow(
    <ArtistsNav {...props} />,
  )
  expect(wrapper).toMatchSnapshot()
})

it('passes the proper index to onSelect', () => {
  const index = 2
  const wrapper = shallow(
    <ArtistsNav {...props} />,
  )
  const ListItems = wrapper.find('ListItem')
  ListItems.at(index).props().onSelect()
  expect(props.onSelect).toHaveBeenCalledWith(index)
})

// alternative way to test connected components
it('passes the proper index to onSelect, with mock store', () => {
  const store = mockStore({ artistsNav: initialState })
  jest.spyOn(store, 'dispatch')
  const index = 2
  const wrapper = mount(
    <MemoryRouter>
      <Provider store={store}>
        <ConnectedArtistNav />
      </Provider>
    </MemoryRouter>,
  )
  const ListItems = wrapper.find('ListItem')
  const expected = {
    type: 'SET_SELECTED_ARTSIST_INDEX',
    index,
  }
  ListItems.at(index).props().onSelect()
  expect(store.dispatch).toHaveBeenCalledWith(expected)
})
