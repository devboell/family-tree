import initialState from 'data/test/artists.json'
import reducer from '../reducer'

it('App reducer, initialState', () => {
  expect(reducer(undefined, {})).toEqual({ artists: initialState })
})
