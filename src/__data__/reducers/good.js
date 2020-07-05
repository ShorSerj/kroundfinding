import {
    TYPES
} from '../actions-types'

const initialStare = {
    cart: [{
        name: 'Нет товаров',
        color: '',
        size: ''
    }],
}

export const good = (state = initialStare, action) => {
    console.log('reducer ========== ', action)
    const newState = {
        ...state
    }
    const cart = [{
        name: `Товар id = ${action.id}`,
        color: `Цвет: ${action.color}`,
        size: `Размер: ${action.size}`
    }]
    console.log('cart ========== ', cart)
    switch (action.type) {
        case TYPES.ADD_GOOD_TO_CART:
            console.log('reducer good', action)
            return {
                ...newState,
                cart: cart
            }
            case TYPES.CLEAR_CART:
                console.log('reducer good-=-=-=-=-=', action)
                return {
                    ...newState,
                    cart: initialStare.cart
                }
                default:
                    return state

    }
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
        newState
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