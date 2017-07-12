import { combineReducers } from 'redux'
import gallery from 'containers/Gallery/reducer'

export default client => combineReducers({
  gallery,
  apollo: client.reducer(),
})
