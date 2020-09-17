import React, { Component } from 'react'
import { utils } from '../../services/utils';
import { ActivitiePreview } from './ActivitiePreview';
import { DayPreview } from './DayPreview';

// 1600232400000 16/6 8:00
// 1600246800000 16/6 12:00
// 1600257600000 16/6 15:00

// 1600326000000 17/6 10:00
// 1600329600000 17/6 11:00
// 1600358400000 17/6 19:00

// 1600407000000 18/6 8:30
// 1600425000000 18/6 13:30
// 1600426800000 18/6 14:00
// 1600434000000 18/6 16:00

// function renderActPreview(props) {

//     return (
//         <DayPreview props = {props}/>
//     )
// }


export class TripAssembly extends Component {

    state = {
        daysMat: null,
        startDay: null
    }

    async componentDidMount() {
        const { trip } = this.props
        await this.loadDaysMat()
        this.setState({ getDateDay: utils.getDateDay(trip.startDate) })
    }

    loadDaysMat = () => {
        const { activities } = this.props.trip;
        const actsDaysMap = this.mapActsToDays(activities);
        const mapLen = Object.values(actsDaysMap).length
        const daysMat = utils.createMat(7, 35);

        var col = 0
        for (let day in actsDaysMap) {
            const currDayActs = actsDaysMap[day];
            for (let i = 0; i < currDayActs.length; i++) {
                const act = currDayActs[i]
                let row = this.getRowIdx(act.at)
                for (let j = 0; j < act.duration; j++) {
                    const time = new Date(act.at)
                    // daysMat[row++][col] = '{act}'
                    daysMat[row++][col] = { act }
                }
            }
            col++

        }
        this.setState({ daysMat })

    }

    renderActPreviews(mat) {
        const actPreviews = []

        for (let i = 0; i < mat.length; i++) {
            console.log("TripAssembly -> renderActPreviews -> i", i)
            // this.getCol(mat, i)}
            var col = this.getCol(mat, i)
            console.log("TripAssembly -> renderActPreviews -> col", col)
            actPreviews.push(<DayPreview key={utils.makeId()} day={col} />
            )

        }
        return actPreviews
    }

    mapActsToDays = () => {
        const { activities } = this.props.trip;
        activities.sort((act1, act2) => act1.at - act2.at)
        return activities.reduce((acc, activitie) => {

            const day = utils.getDateDay(activitie.at)
            if (!acc[day]) acc[day] = []
            acc[day].push(activitie)
            return acc

        }, {})
    }

    getRowIdx = (timeStamp) => {
        const time = new Date(timeStamp)
        const hour = time.getHours()
        const minuets = time.getMinutes()
        let slot = (minuets === 0) ? (hour - 7) * 2 : (hour - 7) * 2 + 1
        return slot
    }

    getCol = (mat, col) => {
        const arrayColumn = (arr, n) => arr.map(x => x[n]);
        return arrayColumn(mat, col);
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

