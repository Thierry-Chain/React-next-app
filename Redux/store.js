import { createStore, combineReducers } from 'redux'


const rootReducer = combineReducers({
    auth: null,
    selected: null
})
const fetchDevTools =
    process.env.NODE_ENV === 'development'
        ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
        : undefined
const store = createStore(rootReducer, fetchDevTools)
export default store
