import {applyMiddleware, combineReducers, createStore} from "redux";
import routingReducer from "./routingReducer";
import routeReducer from "./routeReducer";
import createSagaMiddleware from 'redux-saga'
import {rootWatcher} from "../saga";

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
  routingReducer,
  routeReducer,
})

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootWatcher)
