import artists from 'data/artists.json'

const initialState = {
  artists,
}

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}
