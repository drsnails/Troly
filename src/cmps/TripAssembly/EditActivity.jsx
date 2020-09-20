import React, { Component } from 'react'
import { utils } from '../../services/utils';

export class EditActivity extends Component {
    state = {
        activitie: {
            name: 'nice place',
            at: '',
            time: '',
            labels: ['relax'],
            duration: 1,
            notes: '',
            price: '',
            destination: '',
            id: null
        }


    }

    componentDidMount() {
        const { act } = this.props.props

        if (act) {
            let time = new Date(act.at);
            time.setMinutes(time.getMinutes() - time.getTimezoneOffset());


            this.setState({ activitie: { ...act, price: act.price.amount, at: time.toISOString().slice(0,16) } })
        }
    }

    handleChange = ({ target }) => {
        const field = target.name;
        const value = target.value;
        if (target.type === 'checkbox') this.setState({ [field]: target.checked });
        else if (target.type === 'number') this.setState({ activitie: { ...this.state.activitie, [field]: +value } });
        else this.setState({ activitie: { ...this.state.activitie, [field]: value } });
    }

    onSaveAct = (ev) => {
        ev.preventDefault()
        var { saveAct } = this.props.props
        const { activitie } = this.state
        let datetime = new Date(activitie.at)
        activitie.at = datetime.getTime()
        activitie.price = {amount: activitie.price, currency: '$'}
        // activitie.id = utils.makeId()
        saveAct(this.state.activitie)
    }


    render() {
        return (
            <form onSubmit={this.onSaveAct}>
                <input placeholder="name" name="name" value={this.state.activitie.name} onChange={this.handleChange}></input>
                {/* <label htmlFor="dest-input">destination</label> */}
                <input placeholder="destination" name="destination" id="dest-input" value={this.state.activitie.destination} onChange={this.handleChange}></input>
                {/* <label htmlFor="start-time-activity-input">time</label> */}
                {/* <label htmlFor="date-activity-input">date</label> */}
                <input type="datetime-local" name="at" step="3600" onChange={this.handleChange} value={this.state.activitie.at} required id="date-activity-input" />
                {/* <input type="time" min="07:00" onChange={this.handleChange} max="24:00" step={`${30 * 60}`} name="time" value={this.state.activitie.time} required id="start-time-activity-input" /> */}
                <input placeholder="duration" placeholder="duration" type="number" name="duration" value={this.state.activitie.duration} onChange={this.handleChange}></input>
                <textarea placeholder="notes" onChange={this.handleChange} name="notes" value={this.state.activitie.notes} ></textarea>
                <input type="number" placeholder="price" name="price" onChange={this.handleChange} placeholder="price" value={this.state.activitie.price}></input>
                <button onClick={this.onSaveAct}>Save</button>
            </form>
        )
    }
}
