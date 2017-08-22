import reducer from '../reducer'
import {
  editModes,
  SET_EDIT_MODE,
  SET_SELECTED_PERSON } from '../constants'

const initialState = {
  editMode: editModes.DISABLED,
  selectedPerson: {},
}

describe('EditorPage reducer', () => {
  it('correct initialState', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  it('SET_EDIT_MODE', () => {
    const nextState = {
      ...initialState, editMode: editModes.CREATE,
    }
    const action = {
      type: SET_EDIT_MODE,
      mode: editModes.CREATE,
    }
    expect(reducer(undefined, action)).toEqual(nextState)
  })

  it('SET_SELECTED_PERSON', () => {
    const nextState = {
      ...initialState, selectedPerson: { name: 'John' },
    }
    const action = {
      type: SET_SELECTED_PERSON,
      person: { name: 'John' },
    }
    expect(reducer(undefined, action)).toEqual(nextState)
  })
})
