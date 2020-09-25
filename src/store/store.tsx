import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import externalApiFecth from './reducer';
import root from "./saga/root";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(combineReducers({
    externalApiFecth,
}),
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(root);

export default store;