import { setSelectedPersonId, setSelectionMode } from './actions'
import selectionModes from './constants'

export const selectPerson = id =>
  (dispatch) => {
    dispatch(setSelectedPersonId(id))
    dispatch(setSelectionMode(selectionModes.SELECTED))
  }

export const selectFirst = () =>
  (dispatch) => {
    dispatch(setSelectedPersonId('no_selection'))
    dispatch(setSelectionMode(selectionModes.SELECT_FIRST))
  }

export const unselect = () =>
  (dispatch) => {
    dispatch(setSelectedPersonId('no_selection'))
    dispatch(setSelectionMode(selectionModes.UNSELECTED))
  }
