import reducer from '../reducer'
import {
  SET_SELECTED_PERSON_ID,
  SET_SELECTION_MODE,
} from '../actionTypes'

import selectionModes from '../constants'

const initialState = {
  selectedPersonId: 'no_selection',
  selectionMode: selectionModes.SELECT_FIRST,
}


describe('PersonList reducer', () => {
  it('correct initialState', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  it('SET_SELECTED_PERSON_ID', () => {
    const id = '1'
    const nextState = {
      ...initialState,
      selectedPersonId: id,
    }
    const action = {
      type: SET_SELECTED_PERSON_ID,
      id,
    }
    expect(reducer(undefined, action)).toEqual(nextState)
  })

  it('SET_SELECTION_MODE', () => {
    const mode = selectionModes.UNSELECTED
    const nextState = {
      ...initialState,
      selectionMode: mode,
    }
    const action = {
      type: SET_SELECTION_MODE,
      mode,
    }
    expect(reducer(undefined, action)).toEqual(nextState)
  })
})
