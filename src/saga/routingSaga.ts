import { put, takeEvery, call } from "redux-saga/effects";
import { Action } from "redux"; // Import the Action type from redux
import {FETCH_ROUTE, setMessage, setRouting} from "../store/routingReducer";
import {getRouting} from "../services/get-routing/get-routing";
import {ApiData} from "../services/get-routing/routing-model";


function* fetchRoutingWorker(action: Action): Generator {
    const coordinates = action.payload.map((coord: [number, number]) => coord.join(',')).join(';');
    const url = `/route/v1/driving/${coordinates}?overview=false`;

    try {
        const data: ApiData = yield call(getRouting, url);
        yield put(setRouting(data.waypoints.map(item => {
            return{
                location:item.location,
                name:item.name
            }
        })));
        yield put(setMessage('Response true!'))
    } catch (error) {
        // Handle error here if needed
        console.error('Error fetching routing data:', error);
        yield put(setMessage('There was an error!'))
    }
}

export function* routingWatcher(): Generator {
    yield takeEvery(FETCH_ROUTE, fetchRoutingWorker);
}
