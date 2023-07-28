const defaultState = {
    routing: [],
    message:''
}

export const SET_ROUTE = "SET_ROUTE"
export const FETCH_ROUTE = "FETCH_ROUTE"
export const SET_MESSAGE = "SET_MESSAGE"

export default function routingReducer(state = defaultState, action) {
    switch(action.type) {
        case SET_ROUTE:
            return {...state, routing: action.payload}
        case SET_MESSAGE:
            return {...state, message: action.payload}
        default:
            return state
    }
    return state
}

export const setRouting = payload => ({type: SET_ROUTE, payload})
export const fetchRoute = payload => ({type: FETCH_ROUTE, payload})
export const setMessage = payload => ({type: SET_MESSAGE, payload})

