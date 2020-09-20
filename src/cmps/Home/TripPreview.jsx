import React from 'react'
import { Link } from 'react-router-dom'
import { utils } from '../../services/utils'


export function TripPreview({ trip, img, addClass}) {


    function getTripPrice(activities) {
        let price = activities.reduce((acc, currValue) => {
            acc = acc + currValue.price.amount
            return acc
        }, 0)
        return price
    }
    const price = getTripPrice(trip.activities)
    const days = utils.calculateDays(trip.destinations[0].startDate, trip.destinations[trip.destinations.length - 1].endDate)
    return (
        <div className={'trip-preview flex column ' + (addClass? addClass : '') }>
            <Link to={`/trip/${trip._id}/triproute`} >
                <div className="img-wraper"> 
                    <img src={img} alt=""/>
                </div>
                <div className="trip-preview-details">
                    <h3>{trip.destinations[0].name}</h3>
                    <p>{days} days</p>
                    <p>Price:  ${price}</p>
                </div>
            </Link>
        </div>
    )
}
