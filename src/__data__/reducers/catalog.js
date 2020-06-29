import { TYPES } from '../actions-types'

const initialState = {
  catalog: [],
}

export const catalog = (state = initialState, action) => {
  const newState = { ...state }
  switch (action.type) {
    case TYPES.CATALOG_LIST:
      // console.log('reduer catalog', action)
      return {
        ...newState,
        catalog: action.data
      }
    default:
      return state
  }
}