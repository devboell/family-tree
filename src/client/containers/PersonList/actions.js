import {
  SET_SELECTED_PERSON_ID,
  SET_SELECTION_MODE,
} from './actionTypes'

export const setSelectedPersonId = id => ({
  type: SET_SELECTED_PERSON_ID,
  id,
})

export const setSelectionMode = mode => ({
  type: SET_SELECTION_MODE,
  mode,
})
