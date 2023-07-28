export interface Waypoint {
    location: [number, number];
    name: string;
}

export interface ApiData {
    waypoints: Waypoint[];
}
