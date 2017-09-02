import {
  SET_CREATE_MODE,
} from './actionTypes'

const initialState = {
  createMode: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CREATE_MODE:
      return { ...state, createMode: action.flag }
    default: return state
  }
}
