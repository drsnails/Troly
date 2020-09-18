
import React from 'react'
import { utils } from '../../services/utils'

export function ActivitiePreview({act}) {
    return (
        <div className={ `activitie-prev-assembly ${(act.duration)?'activitie-assembly':'empty-assembly'}`} style={{gridRow: `span ${act.duration}`}} key={utils.makeId()}>
            {act.duration}
        </div>
    )
}
