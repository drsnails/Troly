import React from 'react'
import { utils } from '../../services/utils'
import { TripPreview } from './TripPreview'

export function TripList({ trips, addClass }) {

    if (!trips) return <p>Loading Trips . . . </p>
    return (
        <div className={'trip-list trips-container ' + (addClass? addClass :'') }>
         
            {trips.length? trips.map((trip, idx) =>
                <TripPreview key={trip._id} trip={trip}  addClass={addClass} img={utils.getRandomPic()} />
            ) :
            <TripPreview key={trips._id} trip={trips} addClass={addClass}  img={utils.getRandomPic()}/>
        }
           

        </div>
    )
}
