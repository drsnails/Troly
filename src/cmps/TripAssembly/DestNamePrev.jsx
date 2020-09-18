import React from 'react'
import { utils } from '../../services/utils'

export function DestNamePrev({dest}) {
    console.log("DestNamePrev -> dest", dest)
    return (
        <div  className="dest-name-preview " style={{gridColumn: `span ${dest.duration}`}}>
            {dest.name}
        </div>
    )
}
