import React, { Component } from 'react'
import { utils } from '../../services/utils';
import { ActivitiePreview } from './ActivitiePreview';
import { DayList } from '../../cmps/TripAssembly/DayList'




export class TripAssembly extends Component {

    state = {
        daysMat: null,
        startDate: null,
        endDate: null
    }

    async componentDidMount() {
        await this.loadDaysMat()
        
        
    }

    loadDaysMat = () => {
        const { activities, destinations } = this.props.trip;
        const destTimeStamp = destinations[0].startDate
        const actsDaysMap = this.mapActsToDays(activities);
        const startDate = utils.getDateDay(destTimeStamp)

        const daysMat = utils.createMat(7, 35);

        let col = 0
        



        let prevDay = +actsDaysMap[0][0]
        for (let i = 0; i < actsDaysMap.length; i++) {
            
            let currDayActs, day
            [day, currDayActs] = [+actsDaysMap[i][0], actsDaysMap[i][1]];
            if (prevDay > day) {
                day += this.getDaysInMonth(destTimeStamp)
                // day = prevDay + 1                
            }
            prevDay = day

            col = day - startDate
            for (let j = 0; j < currDayActs.length; j++) {

                const act = currDayActs[j]
                let row = this.getRowIdx(act.at)
                daysMat[row][col] = act

               
            }

        }
        this.setState({ daysMat })

       
    }




    renderActPreviews(mat) {
        const actPreviews = []

        for (let i = 0; i < 7; i++) {

            var col = this.getCol(mat, i)
            actPreviews.push(<DayList key={utils.makeId()} day={col} />
            )

        }
        return actPreviews
    }

    mapActsToDays = () => {
        const { activities, destinations } = this.props.trip;
        activities.sort((act1, act2) => act1.at - act2.at)

        const startDate = utils.getDateDay(destinations[0].startDate)
        const endDate = utils.getDateDay(destinations[0].endDate)
        let totalDays = utils.calculateDays(destinations[0].startDate, destinations[0].endDate)+1
        const daysLinear = []
        for (let i = 0; i< totalDays; i++) {
            daysLinear.push(startDate+i)
        }

        let idx = 0
        let map = activities.reduce((acc, activitie) => {

            let day = utils.getDateDay(activitie.at)

            if (!acc[day]) acc[day] = []
            acc[day].push(activitie)
            return acc

        }, {})
        map = this.sortDateMap(map)
        return map
    }


    getNextBiggerDay(targetDay, FirstDayTime) {
        let currDay = new Date(FirstDayTime)
        let nextDay = new Date(currDay.getTime() + (1000 * 60 * 60 * 24))

        while (currDay.getDay() < nextDay.getDay()) {
            [currDay, nextDay] = [nextDay, new Date(nextDay.getTime() + (1000 * 60 * 60 * 24))]
        }

        return currDay.getDay() + targetDay + 1

    }

    getRowIdx = (timeStamp) => {
        const time = new Date(timeStamp)
        const hour = time.getHours()
        const minuets = time.getMinutes()
        let slot = (minuets === 0) ? (hour - 7) * 2 : (hour - 7) * 2 + 1
        return slot
    }

    getCol = (mat, col) => {
        const MatColumn = (arr, n) => arr.map(x => x[n]);
        return MatColumn(mat, col);
    }

    sortDateMap(map) {
        let arrSorted = [];
        for (let day in map) {

            arrSorted.push([day, map[day]]);
        }
        arrSorted.sort(function (day1, day2) {
            return day1[1][0].at - day2[1][0].at;
        });

        return arrSorted

    }

    getDaysInMonth (timeStamp) {
        let time = new Date(timeStamp)
        let year, month; 
        [month, year] = [time.getMonth(), time.getFullYear()]
            
        return new Date(year, month+1, 0).getDate();
    }

    render() {
        const { daysMat } = this.state
        if (!daysMat) return <div>Loading...</div>
        const acts = this.renderActPreviews(daysMat)
        return (
            <React.Fragment>
                <div className="destinations-header">
                    destinations
                </div>
                <div className={'trip-assembly-main'}>
                    {acts}
                </div >
            </React.Fragment>
        )
    }
}

