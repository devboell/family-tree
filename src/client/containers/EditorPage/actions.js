import {
  SET_SELECTED_PERSON_ID,
  SET_CREATE_MODE,
  SET_IS_REMOVING,
} from './constants'

export const setSelectedPersonId = id => ({
  type: SET_SELECTED_PERSON_ID,
  id,
})

export const setCreateMode = flag => ({
  type: SET_CREATE_MODE,
  flag,
})

export const setIsRemoving = flag => ({
  type: SET_IS_REMOVING,
  flag,
})

export const clearSelection = () => ({
  type: SET_SELECTED_PERSON_ID,
  id: 'no_selection',
})
