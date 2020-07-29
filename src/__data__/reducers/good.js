import {
  TYPES
} from '../actions-types'


const initialState = {
  cart: [],
}

export const good = (state = initialState, action) => {
  const addedGoods = state.cart || []
  const addAdGods = addedGoods.map((item) => {
    if (item.id === action.id) {
      item.count++

    }
  })

  const newGood = {
    name: action.name,
    id: action.id,
    cost: action.cost,
    color: action.color,
    size: action.size,
    count: state
  }

  const isGoods = addedGoods.filter((item) => item.id === action.id)
  if(!isGoods){
    addAdGods.push(newGood)
  }
  
  const newState = {
    ...state,
    cart: [...addAdGods]
  }
  
  // 
  // let newState
  // if (isGoods) {
  //   isGoods.count = isGoods.count + 1
  //   newState = {
  //     ...state,
  //     cart: [...state.cart, newGood]
  //   }
  // } else {
  //   newState = {
  //     ...state,
  //     cart: [...state.cart, newGood]
  //   }
  // }



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
      case TYPES.CLEAR_CART:
        // console.log('reducer good-=-=-=-=-=', action)
        return {
          // ...newState,
          cart: initialState.cart
        }
        default:
          return state
  }
}