import { combineReducers } from 'redux'

import users from './users'
import counter from './counter'

const rootReducer = combineReducers({
  users,
  counter,
})

export default rootReducer
