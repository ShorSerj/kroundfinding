import { combineReducers } from 'redux'

import { good } from './good'
import { catalog } from './catalog'

export default combineReducers({
  good: good,
  catalog: catalog,
})