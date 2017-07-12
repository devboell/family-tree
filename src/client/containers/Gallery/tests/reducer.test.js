import reducer from '../reducer'
import types from '../actionTypes'

const initialState = {
  selectedGenres: [],
}
describe('Gallery reducer', () => {
  it('correct initialState', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  it('SET_SELECTED_GENRES', () => {
    const genres = ['city', 'landscape']
    const nextState = {
      ...initialState, selectedGenres: genres,
    }
    const action = {
      type: types.SET_SELECTED_GENRES,
      genres,
    }
    expect(reducer(undefined, action)).toEqual(nextState)
  })

  it('SELECT_GENRE', () => {
    const genre = 'portrait'
    const genres = ['city', 'landscape']
    const state = { selectedGenres: genres }
    const nextState = { selectedGenres: [...genres, genre] }
    const action = {
      type: types.SELECT_GENRE,
      genre,
    }
    expect(reducer(state, action)).toEqual(nextState)
  })

  it('DESELECT_GENRE', () => {
    const genre = 'city'
    const genres = ['city', 'landscape']
    const state = { selectedGenres: genres }
    const nextState = { selectedGenres: ['landscape'] }
    const action = {
      type: types.DESELECT_GENRE,
      genre,
    }
    expect(reducer(state, action)).toEqual(nextState)
  })
})
