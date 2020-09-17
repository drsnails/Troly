import React from 'react'

export function DayPreview({ day }) {
    var c = 0
    return (
        <div className="day-preview-assembly">
            {/* console.log(day); */}
            {day.map((act) => {
                console.log("DayPreview -> act", act)
                return <div > {act.id} </div>
            })}
        </div>
    )
}
