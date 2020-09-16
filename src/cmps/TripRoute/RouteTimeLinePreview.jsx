import React from 'react'

export function RouteTimeLinePreview({ destination, idx ,isLast}) {

    function calculateDays(start, end) {
        end= new Date(end)
        start= new Date(start)
        var difference = end.getTime() - start.getTime();
        var daysDifference = Math.floor(difference / 1000 / 60 / 60 / 24);
        return daysDifference-1
    }

    return (
        <React.Fragment>

            <div className="flex">
                <div>{idx + 1}</div>
                <div>{destination.name}</div>
                <div>{calculateDays(destination.startDate, destination.endDate)} Nights</div>
            </div>
             { !isLast&&<div className="line"></div>}
        </React.Fragment>
    )
}