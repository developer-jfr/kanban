import {createStore, combineReducers, applyMiddleware} from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import usersReducer from "./auth-reducer";
import tasks from './tasks-reducer'

const rootreducer = combineReducers({
  users: usersReducer,
  tasks
});

const middlewares = applyMiddleware(promise, thunk, createLogger());

export const store = createStore(rootreducer, middlewares);

