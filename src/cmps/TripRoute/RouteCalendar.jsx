import React from 'react'

import { utils } from '../../services/utils'
import { WeekPreview } from './WeekPreview'


export function RouteCalendar({ trip }) {

    function getCalendarData(start, tripLength, end) {
        let nextDay = new Date(start)
        let calendarData = [{day:nextDay.getDate(), ts:nextDay}]
        for (var i = 1; i <= tripLength; i++) {
            nextDay = new Date(nextDay.getTime() + (1000 * 60 * 60 * 24))
            calendarData.push({day:nextDay.getDate(), ts:nextDay})
        }
        calendarData = getFirstSunday(start, calendarData)
        calendarData = getLastSaturday(end, calendarData)
        return calendarData

    }

    function getFirstSunday(date, calendarData) {
        let currDay = new Date(date)
        while (currDay.getDay() > 0) {
            currDay = new Date(currDay.getTime() - (1000 * 60 * 60 * 24))
            calendarData.unshift({day:currDay.getDate(),ts:currDay})
        }
        return calendarData

    }
    function getLastSaturday(date, calendarData) {
        let currDay = new Date(date)
        while (currDay.getDay() < 6) {
            currDay = new Date(currDay.getTime() + (1000 * 60 * 60 * 24))
            calendarData.push({day:currDay.getDate(),ts:currDay})
        }
        return calendarData
    }

    function generateCalendar(trip) {
        const tripStart = trip.destinations[0].startDate
        const tripEnd = trip.destinations[trip.destinations.length - 1].endDate
        const tripLength = utils.calculateDays(tripStart, tripEnd)
        const calendarData = getCalendarData(tripStart, tripLength, tripEnd)
        return calendarData
    }

    const calendarData = generateCalendar(trip)

    function renderTable(data){
        const weekCmps=[]
        let weeksCount = calendarData.length / 7;
        while(weeksCount){
            weekCmps.push(<WeekPreview dates={data.splice(0,7)} destinations={trip.destinations}/>)
            weeksCount--
        }
        return weekCmps

    }
    return (
        <table>
            <tbody>
                {renderTable(calendarData)}
            </tbody>
        </table>
    )
}
