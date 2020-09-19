import React, { Component } from 'react'
import { utils } from '../../services/utils';
import { ActivityList } from './ActivityList'
import { DayTimeLine } from './DayTimeLine';
import { DestinationsHeader } from './DestinationsHeader';



export class TripAssembly extends Component {

    state = {
        daysMat: null,
        page: 0,
        startDate: null,
        endDate: null,
        tripLength: '',
        actsToDisplay: null
    }

    async componentDidMount() {
        const { destinations } = this.props.trip
        let startDate, endDate
        [startDate, endDate] = [destinations[0].startDate, destinations[destinations.length - 1].endDate]
        const tripLength = utils.calculateDays(startDate, endDate)
        await this.setState({ tripLength, startDate, endDate })
        await this.loadDaysMat()

    }

    loadDaysMat = () => {
        const { activities, destinations } = this.props.trip;
        const actsDaysMap = this.mapActsToDays(activities);
        const actsToDisplay = actsDaysMap.slice(this.state.page * 7, this.state.page * 7 + 7)
        const destTimeStamp = actsToDisplay[0][1][0].at
        const startDate = utils.getDateDay(destTimeStamp)
        let daysMat = utils.createMat(7, 35);
        let col = 0

        let prevDay = +actsToDisplay[0][0]
        for (let i = 0; i < actsToDisplay.length; i++) {
            let currDayActs, day
            [day, currDayActs] = [+actsToDisplay[i][0], actsToDisplay[i][1]];
            if (prevDay > day) {
                day += this.getDaysInMonth(destTimeStamp)
            }
            prevDay = day
            col = day - startDate
            for (let j = 0; j < currDayActs.length; j++) {

                const act = currDayActs[j]
                act.col = col
                let row = this.getRowIdx(act.at)
                if (!act.freeDay) daysMat[row][col] = act
            }
        }
        daysMat = this.showDaysName(destTimeStamp, daysMat)

        this.setState({ daysMat, actsToDisplay })
    }

    showDaysName(startTime, mat) {
        for (let j = 0; j < 7; j++) {
            const date = new Date(startTime + j * 24 * 60 ** 2 * 1000)
            mat[0][j] = { duration: 1, literalDay: utils.getWeekDay(startTime + j * 24 * 60 ** 2 * 1000), date: date.toLocaleDateString() }
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
        let prevDay;
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

            arrSorted.push([+day, map[day]]);
        }
        const linearDays = this.getLinearTripDays();
        for (let i = 0; i < linearDays.length; i++) {
            let currDay = utils.getDateDay(linearDays[i])
            let isInclude = arrSorted.find((day) => day[0] === currDay)
            if (!isInclude) {
                arrSorted.push([currDay, [{ at: linearDays[i], freeDay: true }]])
            }

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
        var { destinations } = this.props.trip
        const { actsToDisplay } = this.state
        destinations = this.destsWithActs(destinations, actsToDisplay)

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


            return { name: destination.name, duration: totaHalflDays }
        })
    }

    getLinearTripDays = () => {
        const linearDays = []
        let { startDate, tripLength } = this.state
        for (let i = 0; i < tripLength; i++) {
            let currDay = utils.getDateDay(startDate + i * 24 * 60 * 60 * 1000)
            linearDays.push(startDate + i * 24 * 60 * 60 * 1000)
        }
        return linearDays
    }

    destsWithActs = (destinations, allActs) => {
        destinations = destinations.filter((dest) => {
            return this.isActInDests(dest, allActs)
        })
        return destinations



    }

    isActInDests(dest, allActs) {
        for (let acts of allActs) {
            let currActs = acts[1]
            for (let act of currActs) {
                if (act.destination === dest.name) return true
            }
        }
        return false
    }



    render() {
        const { daysMat } = this.state
        if (!daysMat) return <div>Loading...</div>
        this.getLinearTripDays()
        const acts = this.renderActPreviews(daysMat)
        return (
            <React.Fragment>
                <DestinationsHeader destinations={this.getMinDestinations()} />
                <div className={'trip-assembly-main'}>
                    <DayTimeLine/>
                    {acts}
                </div >
                <button className='editActivity' onClick={()=>this.props.showModal('editActivity')}>add activity</button>
            </React.Fragment>
        )
    }
}

