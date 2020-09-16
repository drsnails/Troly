import React from 'react'
import { Link } from 'react-router-dom'


export function TripNavBar({ tripId }) {
    return (
        <div>
            <Link to={`/trip/${tripId}/triproute`}>Route</Link>
            <Link to={`/trip/${tripId}/tripassembly`}>Assembly</Link>
        </div>
    )
}
