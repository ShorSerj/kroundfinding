import {
  TYPES
} from '../actions-types'


const initialState = {
  cart: [],
}

export const good = (state = initialState, action) => {
  const addedGoods = state.cart || []

  const newGood = {
    name: action.name,
    id: action.id,
    cost: action.cost,
    color: action.color,
    size: action.size,
    count: 0
  }
  const isGoods = addedGoods.filter((item) => item.id === action.id)
  if(!isGoods.length){
    addedGoods.push(newGood)
  }
  
  addedGoods.map((item, index) => {
    if (item.id === undefined) {
      addedGoods.splice(index, 1)
    }

    if (item.id === action.id) {
      item.count++
    }
  })

  switch (action.type) {
    case TYPES.ADD_GOOD_TO_CART:
      return {
        ...state,
        cart: [...addedGoods]
      }
    case TYPES.CLEAR_CART:
      return {
        cart: initialState.cart
      }
        default:
          return state
  }
}