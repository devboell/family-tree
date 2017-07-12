import types from './actionTypes'

const initialState = {
  selectedGenres: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_SELECTED_GENRES:
      return { ...state, selectedGenres: action.genres }
    case types.SELECT_GENRE:
      return { ...state, selectedGenres: [...state.selectedGenres, action.genre] }
    case types.DESELECT_GENRE:
      return {
        ...state,
        selectedGenres: state.selectedGenres.filter(g => g !== action.genre) }
    default:
      return state
  }
}
