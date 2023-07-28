import { put, takeEvery, call } from "redux-saga/effects";
import {FETCH_ROUTE, setMessage, setRouting} from "../store/routingReducer";
import {getRouting} from "../services/get-routing/get-routing";

function* fetchRoutingWorker(action:any): Generator {
    const coordinates = action.payload.map((coord: [number, number]) => coord.join(',')).join(';');
    const url = `/route/v1/driving/${coordinates}?overview=false`;

    try {
        const data:any = yield call(getRouting, url);
        yield put(setRouting(data.waypoints.map((item:any) => {
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
