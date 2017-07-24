import { editModes } from './constants'
import {
  setSelectedPerson,
  setEditMode,
} from './actions'

const newPerson = {
  name: '',
  bornToId: null,
  partners: [],
}

export const selectPerson = person =>
  (dispatch) => {
    dispatch(setSelectedPerson(person))
    dispatch(setEditMode(editModes.UPDATE))
  }

export const createPerson = () =>
  (dispatch) => {
    dispatch(setSelectedPerson(newPerson))
    dispatch(setEditMode(editModes.CREATE))
  }

export const removePerson = () =>
  (dispatch) => {
    dispatch(setSelectedPerson({}))
    dispatch(setEditMode(editModes.DISABLED))
  }
