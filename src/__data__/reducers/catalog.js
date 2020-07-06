import {
    TYPES
} from '../actions-types'

const initialStare = {
    catalog: [],
}

export const catalog = (state = initialStare, action) => {
    const newState = {
        ...state
    }
    switch (action.type) {
        case TYPES.CATALOG_LIST:
            console.log('reducer catalog', action)
            return {
                ...newState,
                catalog: action.data
            }
            default:
                return state
    }
}