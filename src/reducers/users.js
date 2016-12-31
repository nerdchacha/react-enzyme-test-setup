import { SET_USERS } from '../actions'

const initialState = {details: []}

const users = function (state = initialState, action) {
  switch (action.type) {
    case SET_USERS:
      return {
        users: action.users
      }
    default:
      return state
  }
}

export default users
