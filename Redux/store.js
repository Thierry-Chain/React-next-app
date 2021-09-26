import { createStore, combineReducers } from 'redux'
import userReducer from './reducer'

const rootReducer = combineReducers({
    drive: userReducer,
    selected: null
})
const fetchDevTools =
    process.env.NODE_ENV === 'development'
        ? globalThis.__REDUX_DEVTOOLS_EXTENSION__ &&
        globalThis.__REDUX_DEVTOOLS_EXTENSION__()
        : undefined
//console.log('global', globalThis.window)
//console.log(globalThis.localStorage)
const store = createStore(rootReducer, fetchDevTools)
export default store
