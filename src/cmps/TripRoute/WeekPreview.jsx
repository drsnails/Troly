import React, { Component } from 'react'

export function WeekPreview({ dates, destinations }) {
    console.log(dates);


    return (
        <tr>
            {dates.map((date,idx) => <td   key={idx}>{date.day}</td>)}
        </tr>
    )

}
