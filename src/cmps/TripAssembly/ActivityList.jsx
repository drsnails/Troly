import React from 'react'
import { utils } from '../../services/utils'
import { ActivitiePreview } from './ActivitiePreview'


export function ActivityList({ day, getRowIdx }) {
    console.log("ActivityList -> day", day)
    return (
        <div className="day-list-assembly">

            {day.map((act) => {

                return <ActivitiePreview getRowIdx={getRowIdx} key={utils.makeId()} act={act} />
            })}
        </div>
    )
}