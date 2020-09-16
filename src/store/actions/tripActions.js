import { tripService } from "../../services/tripService"




export function loadTrip(tripId) {
    return async dispatch => {
        const trip = await tripService.getById(tripId)
        // dispatch()
        return trip
    }
}