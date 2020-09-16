import React from 'react'
import { RouteTimeLinePreview } from './RouteTimeLinePreview'

export function RouteTimeLine({ trip }) {
    
    return (
        <div className="route-time-line">
            {trip.destinations.map((destination,idx)=>{
            return (
            <RouteTimeLinePreview key={idx} destination={destination} idx={idx} isLast={(idx+1)===trip.destinations.length?true:false}/>
            )
            })}
        

        </div>
    )
}
