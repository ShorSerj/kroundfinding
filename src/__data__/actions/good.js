import {
  TYPES
} from '../actions-types'

export function good(id, name, cost, size, color) {
  return (dispatch) => {
    dispatch({
      type: TYPES.ADD_GOOD_TO_CART,
      id,
      name,
      cost,
      color,
      size,
    })
  }
}

export function clear() {
  return (dispatch) => {
    dispatch({
      type: TYPES.CLEAR_CART
    })
  }
}