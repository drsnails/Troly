import React from 'react'
import { Link } from 'react-router-dom'


export function TripPreview({ trip, img }) {


    function getTripPrice(activities) {
        let price = activities.reduce((acc, currValue) => {
            acc = acc + currValue.price.amount
            return acc
        }, 0)
        return price
    }

    const style = {
        background: `url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }

    const price = getTripPrice(trip.activities)
    return (
        <div className="trip-preview flex column" style={style}>
            <Link to={`/trip/${trip._id}/triproute`} >
                <div className="trip-preview-details">
                    <h3>{trip.destinations[0].name}</h3>
                    <p>Price:  ${price}</p>
                </div>
            </Link>
        </div>
    )
}
