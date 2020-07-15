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
    console.log('item', item)
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