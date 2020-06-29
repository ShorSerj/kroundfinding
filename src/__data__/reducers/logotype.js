import { TYPES } from '../actions-types'

const initialState = {
  logo: [{ color: 'blck',
           size: '16px' 
        }],
}

export const logo = (state = initialState, action) => {
  // console.log('reducer ==========', action)
  const newState = { ...state }
  const logotype = [{ color: `${action.logo}` }]
  switch (action.type) {
    case TYPES.CONTEXT_LOGOTYPE:
      // console.log('reduer good', action)
      return {
        ...newState,
        logotype: logotype
      }
    default:
      return state
  }
}