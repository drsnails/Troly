import { tripService } from "../../services/TripService"


export function loadTrips() {
    return async dispatch => {
        const trips = await tripService.query()
        dispatch({ type: 'SET_TRIPS', trips })
    }
}