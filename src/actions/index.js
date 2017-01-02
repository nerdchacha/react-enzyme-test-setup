export const SET_USERS = 'SET_USERS'
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

export function setUsers (users) {
  return({
    type: SET_USERS,
    users: users,
  })
}

export function increment () {
  return({
    type: INCREMENT,
  })
}

export function decrement () {
  return({
    type: DECREMENT,
  })
}
