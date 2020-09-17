import React from 'react'
import { RouteCalendar } from './RouteCalendar'
import { RouteTimeLine } from './RouteTimeLine'

export function TripRoute({trip}) {
    return (
        <div className="flex">
            <RouteTimeLine trip={trip}/>
            <RouteCalendar trip={trip}/>
        </div>
    )
}
