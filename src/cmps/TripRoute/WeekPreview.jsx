import React, { Component } from 'react'

export function WeekPreview({ dates, destinations }) {
    console.log(dates);

    function addMarker(date){

    }

    return (
        <tr>
            {dates.map((date,idx) => <td style={{position:"relative"}}  key={idx}>{date.day}{addMarker(date)}</td>)}
        </tr>
    )

}
