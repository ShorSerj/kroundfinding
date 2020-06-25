import { TYPES } from '../actions-types'

const initialState = {
  cart: [{ name: 'Нет товаров' }],
}

export const good = (state = initialState, action) => {
  console.log('reducer ==========', action)
  const newState = { ...state }
  const cart = [{ name: `Товар id = ${action.id}` }]
  switch (action.type) {
    case TYPES.ADD_GOOD_TO_CART:
      console.log('reduer good', action)
      return {
        ...newState,
        cart: cart
      }
    default:
      return state
  }
}