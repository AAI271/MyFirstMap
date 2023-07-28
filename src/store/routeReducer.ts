const defaultState = {
    routes: [
        {
            key: '1',
            name: 'Route1',
            point1: [59.84660399, 30.29496392],
            point2: [59.82934196, 30.42423701],
            point3: [59.83567701, 30.58064206],
        },
        {
            key: '2',
            name: 'Route2',
            point1: [59.82934196, 30.32423701],
            point2: [59.85761295, 30.41705607],
            point3: [59.87960399, 30.44496392],
        },
        {
            key: '3',
            name: 'Route3',
            point1: [59.87567701, 30.38064206],
            point2: [59.85660399, 30.51496392],
            point3: [59.86761295, 30.67705607],
        },]
}

export const ADD_ROUTE = "ADD_ROUTE"

export default function routeReducer(state = defaultState, action) {
    switch (action.type) {
        case ADD_ROUTE:
            return {...state, count: state.routes.push(action.payload)}
    }
    return state
}

export const addRouteCreator = payload => ({type: ADD_ROUTE,payload})
