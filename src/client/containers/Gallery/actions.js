import types from './actionTypes'

export const setSelectedGenres = genres => ({
  type: types.SET_SELECTED_GENRES,
  genres,
})

export const selectGenre = genre => ({
  type: types.SELECT_GENRE,
  genre,
})

export const deselectGenre = genre => ({
  type: types.DESELECT_GENRE,
  genre,
})
