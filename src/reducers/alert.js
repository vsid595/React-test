import { SET_ALERT } from '../actions/types'
import { REMOVE_ALERT } from '../actions/types'
const intialState = []
export default function (state = intialState, action) {

    const { type, payload } = action

    switch (type) {
        case SET_ALERT: return [...state, payload]
        case REMOVE_ALERT: return[]
        default: return state
    }
}