import {
  editModes,
  SET_EDIT_MODE,
  SET_SELECTED_PERSON } from './constants'

const initialState = {
  editMode: editModes.DISABLED,
  selectedPerson: {},
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_EDIT_MODE:
      return { ...state, editMode: action.mode }
    case SET_SELECTED_PERSON:
      return { ...state, selectedPerson: action.person }

    default: return state
  }
}
