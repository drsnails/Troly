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


export function addTrip(newTrip) {
    return async dispatch => {
        try {
            const trip = await tripService.save(newTrip)
            dispatch({ type: 'EDIT_TRIP', trip })
            return trip
        }
        catch (err) {
            console.log('TripAction: Could not save trip', err);
        }
    }
}