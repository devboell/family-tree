import {
  setSelectedPersonId,
  setCreateMode,
  setIsRemoving,
  clearSelection,
} from './actions'


export const selectPersonId = id =>
  (dispatch) => {
    dispatch(setSelectedPersonId(id))
    dispatch(setCreateMode(false))
  }

export const prepareCreatePerson = () =>
  (dispatch) => {
    dispatch(clearSelection())
    dispatch(setCreateMode(true))
  }

export const createPerson = id =>
  (dispatch) => {
    dispatch(setSelectedPersonId(id))
    dispatch(setCreateMode(false))
  }

export const removePerson = () =>
  (dispatch) => {
    dispatch(clearSelection())
    dispatch(setCreateMode(false))
    dispatch(setIsRemoving(true))
  }
