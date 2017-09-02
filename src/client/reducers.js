import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import editor from 'containers/Editor/reducer'
import personList from 'containers/PersonList/reducer'

export default client => combineReducers({
  personList,
  editor,
  form: formReducer,
  apollo: client.reducer(),
})
