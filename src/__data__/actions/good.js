import { TYPES } from '../actions-types'

export function good(id) {
  const defCart = true
  return (dispatch) => {
    dispatch({ type: TYPES.ADD_GOOD_TO_CART, id, defCart })
  }
}