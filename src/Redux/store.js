import {createStore, applyMiddleware, compose } from 'redux'
import reducer from '../Redux/reducer'
import  ThunkMiddleware  from 'redux-thunk'

const composeEnhacer = window.__REDUX_DEVOTOOLS_EXTENSION_COMPOSE|| compose

const store = createStore (
    reducer,
    composeEnhacer( applyMiddleware(ThunkMiddleware))
)

export default store