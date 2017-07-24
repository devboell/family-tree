import {
  SET_EDIT_MODE,
  SET_SELECTED_PERSON } from './constants'

export const setEditMode = mode => ({
  type: SET_EDIT_MODE,
  mode,
})

export const setSelectedPerson = person => ({
  type: SET_SELECTED_PERSON,
  person,
})
