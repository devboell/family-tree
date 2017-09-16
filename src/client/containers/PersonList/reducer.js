import {
  SET_SELECTED_PERSON_ID,
  SET_SELECTION_MODE,
} from './actionTypes'

import selectionModes from './constants'

const initialState = {
  selectedPersonId: 'no_selection',
  selectionMode: selectionModes.SELECT_FIRST,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_PERSON_ID:
      return { ...state, selectedPersonId: action.id }
    case SET_SELECTION_MODE:
      return { ...state, selectionMode: action.mode }
    default: return state
  }
}
