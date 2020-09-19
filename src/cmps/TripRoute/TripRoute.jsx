// import { GoogleApiWrapper } from 'google-maps-react';
import React from 'react'
import { MapContainer } from '../MainCmps/Map';
import { RouteCalendar } from './RouteCalendar'
import { RouteTimeLine } from './RouteTimeLine'



export function TripRoute({ trip,changeOrder }) {
    function getMarkers(){
        return trip.destinations.map(dest=>{
            return {location:dest.location,name:dest.name}})
        
    }

    return (
        <div className="trip-route flex">
            <RouteTimeLine trip={trip} changeOrder={changeOrder} />
            <div className="route-right flex column ">
                <MapContainer markers={getMarkers()} />
                <RouteCalendar trip={trip} />
            </div>


        </div>
    )
}
