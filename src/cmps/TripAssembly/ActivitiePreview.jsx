
import React from 'react'
import { utils } from '../../services/utils'

export function ActivitiePreview({ act, getRowIdx }) {
    const startTime = utils.getTimeDayStr(act.at)
    const endTime = utils.getTimeDayStr(act.at + (+act.duration/2) * 60 * 60 * 1000)
    const rowIdx = getRowIdx(act.at)


    return (
        <div className={`activitie-prev-assembly ${(act.duration) ? 'activitie-assembly' : 'empty-assembly'} ${(act.literalDay) ? 'literal-day' : ''}`} style={{ gridRow: `${rowIdx || 'auto'}/span ${act.duration}` }} key={utils.makeId()}>
            {act.literalDay || ''}
            <p>{act.at && `${startTime}-${endTime}`}</p>
            <p>{act.destination}</p>
            <p>{act.name}</p>
        </div>
    )
}
