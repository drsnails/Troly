// import { GoogleApiWrapper } from 'google-maps-react';
import React from 'react'
import { MapContainer } from '../MainCmps/Map';
import { RouteCalendar } from './RouteCalendar'
import { RouteTimeLine } from './RouteTimeLine'



export function TripRoute({ trip }) {
    function getMarkers(){
        return trip.destinations.map(dest=>{
            return {location:dest.location,name:dest.name}})
        
    }

    return (
        <div className="flex">
            <RouteTimeLine trip={trip} />
            <div className="flex column">
                <RouteCalendar trip={trip} />
                <MapContainer markers={getMarkers()} />
            </div>


        </div>
    )
}
