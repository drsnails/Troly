import { tripService } from "../../services/tripService"




export function loadTrip(tripId) {
    return async dispatch => {
        dispatch({ type: 'SET_LOADER' })
        return new Promise(resolve => {
            setTimeout(async () => {
                var trip = await tripService.getById(tripId)
                dispatch({ type: 'CLOSE_LOADER' })
                console.log(trip);
                resolve(trip)
            }, 3000)
        })
    }
}

export function loadTrips() {
    return async dispatch => {
        dispatch({ type: 'SET_LOADER' })
        setTimeout(async()=>{
            const trips = await tripService.query()
            dispatch({ type: 'SET_TRIPS', trips })
            dispatch({ type: 'CLOSE_LOADER' })
        },2000)
    }
}


export function addTrip(newTrip) {
    return async dispatch => {
        try {
            dispatch({ type: 'SET_LOADER' })
            const trip = await tripService.save(newTrip)
            dispatch({ type: 'EDIT_TRIP', trip })
            dispatch({ type: 'CLOSE_LOADER' })
            return trip
        }
        catch (err) {
            console.log('TripAction: Could not save trip', err);
        }
    }
}