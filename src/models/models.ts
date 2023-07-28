export interface IRoute{
    key: string;
    name: string;
    point1: number[];
    point2: number[];
    point3: number[];
}
export interface IRouteReducer{
    routes:IRoute[]
}

export interface IRouting{
    name: string,
    location: [number, number]
}
export interface IRoutingReducer{
    routing: IRouting[],
    message:string
}
export interface IState{
    routeReducer:IRouteReducer,
    routingReducer:IRoutingReducer
}

export interface IData{
    waypoints:IRouting[]
}
