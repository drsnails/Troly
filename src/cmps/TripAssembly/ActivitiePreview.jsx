
import React from 'react'
import { utils } from '../../services/utils'

export function ActivitiePreview({ act, getRowIdx }) {
    const startTime = utils.getTimeDayStr(act.at)
    const endTime = utils.getTimeDayStr(act.at + (+act.duration/2) * 60 * 60 * 1000)
    const rowIdx = getRowIdx(act.at)
    const activitieClass = (act.duration) ? 'activitie-assembly' : 'empty-assembly'
    const isFirstCol = (act.col===0)?'first-col':''
    const isDayHeadClass = (act.literalDay) ? 'literal-day' : ''

    return (
        <div className={`activitie-prev-assembly ${activitieClass} ${isDayHeadClass} ${isFirstCol}`} style={{ gridRow: `${rowIdx || 'auto'}/span ${act.duration}` }} key={utils.makeId()}>
            {act.literalDay || ''}
            {act.col===0 && <span className="activitie-time">{startTime}</span>}
            <p>{act.at && `${startTime}-${endTime}`}</p>
            <p>{act.destination}</p>
            <p>{act.name}</p>
        </div>
    )
}
