import React from 'react'
import { utils } from '../../services/utils'

export function DayTimeLine() {

    function getTimeFromIdx(idx) {
        return
    }
    return (
        <div className="time-line-assembly">

            {(function () {
                let times = []
                for (let i = 0; i < 35; i++) {
                    let time = <div key={utils.makeId()} className="time-assembly">
                        {<span>7:00</span>}
                    </div>
                    times.push(time)
                }
                return times

            })()}
        </div>
    )
}
