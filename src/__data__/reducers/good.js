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
}