import { compose, createStore } from 'redux'
import persistState from 'redux-localstorage'
import rootReducer from './reducers'

const enhancer = compose(persistState())

const store = createStore(rootReducer, enhancer)

export default store