import {
  createStore,
  applyMiddleware,
  compose
} from 'redux'
import logger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

// import rootReduce from './reducers'

export default function configureStore(initiaState) {
  const store = createStore(
    // rootReduce,
    applyMiddleware(thunkMiddleware, logger))
  return store
}