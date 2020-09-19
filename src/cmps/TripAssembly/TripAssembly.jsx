import React, { Component } from 'react'
import { utils } from '../../services/utils';
import { ActivityList } from './ActivityList'
import { DestinationsHeader } from './DestinationsHeader';




export class TripAssembly extends Component {

    state = {
        daysMat: null,
    }

    async componentDidMount() {
        await this.loadDaysMat()
    }

    loadDaysMat = () => {
        const { activities, destinations } = this.props.trip;
        const destTimeStamp = destinations[0].startDate
        const actsDaysMap = this.mapActsToDays(activities);
        const startDate = utils.getDateDay(destTimeStamp)
        let daysMat = utils.createMat(7, 35);
        let col = 0

        let prevDay = +actsDaysMap[0][0]
        for (let i = 0; i < actsDaysMap.length; i++) {
            let currDayActs, day
            [day, currDayActs] = [+actsDaysMap[i][0], actsDaysMap[i][1]];
            if (prevDay > day) {
                day += this.getDaysInMonth(destTimeStamp)
            }
            prevDay = day
            col = day - startDate
            for (let j = 0; j < currDayActs.length; j++) {

                const act = currDayActs[j]
                act.col = col
                let row = this.getRowIdx(act.at)
                daysMat[row][col] = act
            }
        }
        daysMat = this.showDaysName(destTimeStamp, daysMat)

        this.setState({ daysMat })
    }

    showDaysName(startTime, mat) {
        for (let j = 0; j < 7; j++) {
            mat[0][j] = { duration: 1, literalDay: utils.getWeekDay(startTime + j * 24 * 60 ** 2 * 1000) }
        }
        return mat
    }


    renderActPreviews(mat) {
        const actPreviews = []

        for (let i = 0; i < 7; i++) {

            var col = this.getCol(mat, i)
            actPreviews.push(<ActivityList getRowIdx={this.getRowIdx} key={utils.makeId()} day={col} />
            )
        }

        return actPreviews
    }


    mapActsToDays = () => {
        const { activities, destinations } = this.props.trip;
        activities.sort((act1, act2) => act1.at - act2.at)

        const startDate = utils.getDateDay(destinations[0].startDate)
        let totalDays = utils.calculateDays(destinations[0].startDate, destinations[destinations.length - 1].endDate) + 1
        const daysLinear = []
        for (let i = 0; i < totalDays; i++) {
            daysLinear.push(startDate + i)
        }

        let map = activities.reduce((acc, activitie) => {

            let day = utils.getDateDay(activitie.at)

            if (!acc[day]) acc[day] = []
            acc[day].push(activitie)
            return acc

        }, {})
        map = this.sortDateMap(map)
        return map
    }


    getRowIdx = (timeStamp) => {
        const time = new Date(timeStamp)
        const hour = time.getHours()
        const minuets = time.getMinutes()
        let slot = (minuets === 0) ? (hour - 6) * 2 : (hour - 6) * 2 + 1
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


    getDaysInMonth(timeStamp) {
        let time = new Date(timeStamp)
        let year, month;
        [month, year] = [time.getMonth(), time.getFullYear()]

        return new Date(year, month + 1, 0).getDate();
    }

    getMinDestinations = () => {
        const { destinations } = this.props.trip
        let lastEndDate;
        let freeDaysLeft = 14
        return destinations.map((destination, idx) => {
            let isSameStartDay = false
            let isSameEndDay = false
            if (utils.getDateDay(destination.startDate) === utils.getDateDay(lastEndDate)) {
                isSameStartDay = true
            }
            if (destinations[idx + 1] && utils.getDateDay(destinations[idx + 1].startDate) === utils.getDateDay(destination.endDate)) {
                isSameEndDay = true
            }
            lastEndDate = destination.endDate
            let totalDays = utils.calculateDays(destination.startDate, destination.endDate) + 1
            let totaHalflDays = (isSameStartDay) ? totalDays * 2 - 1 : totalDays * 2
            totaHalflDays = (isSameEndDay) ? totaHalflDays - 1 : totaHalflDays
            totaHalflDays = (totaHalflDays > freeDaysLeft) ? freeDaysLeft : totaHalflDays
            freeDaysLeft -= totaHalflDays


            return { name: destination.name, duration: totaHalflDays, isSameStartDay, isSameEndDay }
        })
    }


    render() {
        const { daysMat} = this.state
        if (!daysMat) return <div>Loading...</div>
        const acts = this.renderActPreviews(daysMat)
        return (
            <React.Fragment>
                <DestinationsHeader destinations={this.getMinDestinations()} />
                <div className={'trip-assembly-main'}>
                    {acts}
                </div >
            </React.Fragment>
        )
    }
}

