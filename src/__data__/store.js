import { createStore as createReduxStore, combineReducers, applyMiddleware, compose } from 'redux'
import logger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

import * as projectReducers from './reducers'

export default createStore = () => {
  const store = createReduxStore([projectReducers], applyMiddleware(logger))
  return store
}
