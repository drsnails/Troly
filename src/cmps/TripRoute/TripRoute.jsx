import React from 'react'
import { RouteTimeLine } from './RouteTimeLine'

export function TripRoute({trip}) {
    return (
        <div>
            {/* {trip.destinations[0].name} */}
            <RouteTimeLine trip={trip}/>
        </div>
    )
}
