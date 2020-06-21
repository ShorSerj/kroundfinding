import {
    TYPES
} from '../actions-types'

export function good(id, color, size) {
    return (dispatch) => {
        dispatch({
            type: TYPES.ADD_GOOD_TO_CART,
            id,
            color,
            size
        })
    }
}

export function clear() {
    return (dispatch) => {
        dispatch({
            type: TYPES.CLEAR_CART
        })
    }
}