import React from 'react'
import { utils } from '../../services/utils'
export function DayPreview({ day }) {
    var c = 0
    return (
        <div className="day-preview-assembly">

            {day.map((act) => {
                return <div key={utils.makeId()}></div>
            })}
        </div>
    )
}
