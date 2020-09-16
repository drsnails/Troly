import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import {tripReducer } from './reducers/TripReducer';
import { userReducer } from './reducers/userReducer';
import { destinationReducer } from './reducers/destinationReducer';
import { attractionReducer } from './reducers/attractionReducer';


const rootReducer = combineReducers({
    tripReducer,
    userReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))