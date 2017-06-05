import reducer from '../reducer'
import initialState from './test_data'

it('ArtistsNav reducer, initialState', () => {
  expect(reducer(undefined, {})).toEqual(initialState)
})

it('ArtistsNav reducer, SET_SELECTED_ARTSIST_INDEX', () => {
  const action = {
    type: 'SET_SELECTED_ARTSIST_INDEX',
    index: 5,
  }

  const nextState = reducer(undefined, action)

  expect(nextState.selectedArtistIndex).toBe(5)
})
