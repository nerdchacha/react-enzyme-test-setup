import { combineReducers } from 'redux'

import users from './users'
import config from './config'

const rootReducer = combineReducers({
  users,
  config
})

export default rootReducer
