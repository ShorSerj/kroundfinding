import { TYPES } from '../actions-types'

export function logotype(logo) {
  const defCart = true
  return (dispatch) => {
    dispatch({ type: TYPES.CONTEXT_LOGOTYPE, logo, defCart })
  }
}