import { setSelectedArtistIndex } from '../actions'

it('ArtistsNav actions', () => {
  const expected = {
    type: 'SET_SELECTED_ARTSIST_INDEX',
    index: 5,
  }
  expect(setSelectedArtistIndex(5)).toEqual(expected)
})
