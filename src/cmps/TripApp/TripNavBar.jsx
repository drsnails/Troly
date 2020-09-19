import React from 'react'
import { Link } from 'react-router-dom'


export function TripNavBar({ tripId }) {
    return (
        <div className="trip-navbar flex full">
            <div className="trip-routes flex justify-center">
                <Link to={`/trip/${tripId}/triproute`}>Route</Link>
                <Link to={`/trip/${tripId}/tripassembly`}>Assembly</Link>
            </div>
            <a className='see'>settings</a>
        </div>
    )
}
