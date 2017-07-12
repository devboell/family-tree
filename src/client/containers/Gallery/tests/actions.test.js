import types from '../actionTypes'
import {
  setSelectedGenres,
  selectGenre,
  deselectGenre,
} from '../actions'

describe('Gallery actions creators', () => {
  it('setSelectedGenres', () => {
    const genres = ['city', 'landscape']
    const expected = ({
      type: types.SET_SELECTED_GENRES,
      genres,
    })
    expect(setSelectedGenres(genres)).toEqual(expected)
  })

  it('selectGenre', () => {
    const genre = 'city'
    const expected = ({
      type: types.SELECT_GENRE,
      genre,
    })
    expect(selectGenre(genre)).toEqual(expected)
  })

  it('deselectGenre', () => {
    const genre = 'city'
    const expected = ({
      type: types.DESELECT_GENRE,
      genre,
    })
    expect(deselectGenre(genre)).toEqual(expected)
  })
})
