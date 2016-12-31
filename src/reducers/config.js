import { SET_TIMEOUT } from '../actions'

const initialState = {timeout: 0}

const config = function (state = initialState, action) {
  switch (action.type) {
    case SET_TIMEOUT:
      return {
        timeout: action.timeout
      }
    default:
      return state
  }
}

export default config
