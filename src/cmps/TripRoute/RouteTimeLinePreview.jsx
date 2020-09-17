import React from 'react'

import {utils} from '../../services/utils'

export function RouteTimeLinePreview({ destination, idx ,isLast}) {

   

    return (
        <React.Fragment>

            <div className="route-time-line-context flex align-center ">
                <div className="index-ball flex align-center justify-center " >{idx + 1}</div>
                <div>{destination.name}</div>
                <div>{utils.calculateDays(destination.startDate, destination.endDate)-1} Nights</div>
            </div>
             { !isLast&&<div className="line"></div>}
        </React.Fragment>
    )
}