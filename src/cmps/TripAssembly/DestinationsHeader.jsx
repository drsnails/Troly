import { utils } from '../../services/utils'
import { DestNamePrev } from './DestNamePrev'
import React from 'react'


export function DestinationsHeader({ destinations }) {
    return (
        <div className="destinations-header">
            {destinations.map((dest) => {
                return <DestNamePrev key={utils.makeId()} dest={dest} />
            })}
        </div>
    )

}
