import { tripService } from "../../services/tripService"




export function loadTrip(tripId) {
    return async dispatch => {
        const trip = await tripService.getById(tripId)
        // dispatch()
        return trip
    }
}

export function loadTrips() {
    return async dispatch => {
        const trips = await tripService.query()
        dispatch({ type: 'SET_TRIPS', trips })
    }
}