import {
  SET_SELECTED_PERSON_ID,
} from './actionTypes'

const initialState = {
  selectedPersonId: 'preselect',
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_PERSON_ID:
      return { ...state, selectedPersonId: action.id }
    default: return state
  }
}
