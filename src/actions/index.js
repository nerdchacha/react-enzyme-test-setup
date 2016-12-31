export const SET_TIMEOUT = 'SET_TIMEOUT'
export const SET_USERS = 'SET_USERS'

export function setUsers (users) {
  return({
    type: SET_USERS,
    users: users
  })
}

export function setTimeout (timeout) {
  return({
    type: SET_TIMEOUT,
    timeout: timeout
  })
}
