import { LOGIN, LOGOUT } from './actionTypes'
const cached = null //globalThis.localStorage.getItem('client')

const initObj = {
  auth: false,
  client: {},
  error: '',
}

const initState = cached ? JSON.parse(cached) : initObj

const userReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case LOGIN:
      globalThis.localStorage.setItem('client', JSON.stringify(payload))

      return {
        ...state,
        client: payload,
        auth: true,
      }
    case LOGOUT:
      return initObj

    default:
      return state
  }
}
export default userReducer
