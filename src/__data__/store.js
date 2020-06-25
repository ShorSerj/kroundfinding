import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

import rootReducer from './reducers'

export default function configureStore (initialState) {
  const store = createStore(
    rootReducer, 
    initialState, 
    applyMiddleware(thunkMiddleware, logger)
    )
  return store
}
