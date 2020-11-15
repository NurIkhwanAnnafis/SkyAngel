import * as type from '../types/counter';

export function add(number) {
    return dispatch => {
        dispatch({ type: type.ADD_COUNT, payload: number })
    }
}

export function substract(number) {
    return dispatch => {
        dispatch({ type: type.SUBSTRACT_COUNT, payload: number })
    }
}