import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import editor from 'containers/EditorPage/reducer'

export default client => combineReducers({
  editor,
  form: formReducer,
  apollo: client.reducer(),
})
