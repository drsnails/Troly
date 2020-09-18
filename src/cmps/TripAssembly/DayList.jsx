import React from 'react'
import { utils } from '../../services/utils'
import { ActivitiePreview } from './ActivitiePreview'


export function DayList({ day }) {
    return (
        <div className="day-list-assembly">

            {day.map((act) => {

                return <ActivitiePreview key={utils.makeId()} act={act} />
            })}
        </div>
    )
}
