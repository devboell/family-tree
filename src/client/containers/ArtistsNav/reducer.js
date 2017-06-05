import artists from 'data/artists.json'

const initialState = {
  artists,
  selectedArtistIndex: 0,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SELECTED_ARTSIST_INDEX':
      return { ...state, selectedArtistIndex: action.index }
    default:
      return state
  }
}
