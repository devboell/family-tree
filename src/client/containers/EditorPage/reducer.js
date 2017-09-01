import {
  SET_SELECTED_PERSON_ID,
  SET_CREATE_MODE,
  SET_IS_REMOVING,
} from './constants'

const initialState = {
  selectedPersonId: 'no_selection',
  createMode: false,
  isRemoving: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_PERSON_ID:
      return { ...state, selectedPersonId: action.id }
    case SET_CREATE_MODE:
      return { ...state, createMode: action.flag }
    case SET_IS_REMOVING:
      return { ...state, isRemoving: action.flag }
    default: return state
  }
}
