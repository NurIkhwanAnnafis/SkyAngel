import * as type from '../types/counter';

const initState = {
    data: 0,
    isLoading: false
}

export default function counterReducer(state = initState, action) {
    switch (action.type) {
        case type.ADD_COUNT:
            return {
                ...state,
                data: action.payload
            }

        case type.SUBSTRACT_COUNT:
            return {
                ...state,
                data: action.payload
            }
    
        default:
            return state;
    }
}