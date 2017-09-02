/* eslint-disable import/prefer-default-export */
import {
  SET_SELECTED_PERSON_ID,
} from './actionTypes'

export const setSelectedPersonId = id => ({
  type: SET_SELECTED_PERSON_ID,
  id,
})
