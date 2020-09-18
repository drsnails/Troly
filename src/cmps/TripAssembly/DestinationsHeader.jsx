import React from 'react'
import { utils } from '../../services/utils'
import { DestNamePrev } from './DestNamePrev'
export function DestinationsHeader({destinations}) {

    return (
        <div className="destinations-header">
            {destinations.map((dest)=> {
                return <DestNamePrev key={utils.makeId()} dest={dest}/>
            })}
        </div>
    )
}
