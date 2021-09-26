import { LOGIN, LOGOUT } from './actionTypes'
    const client = { name: 'Thierry', clientId: '14323422', marks: '100%' }

const login = () => {
    return {
        type: LOGIN,
        payload: client,
    }
}
const logout = () => {
    return {
        type: LOGOUT,
        payload: {},
    }
}
export { logout, login }
