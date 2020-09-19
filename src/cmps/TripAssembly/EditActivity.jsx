import React, { Component } from 'react'

export class EditActivity extends Component {
    state = {
        name: '',
        date: '',
        time:'',
        duration:'',
        notes:'',
        price:''

    }
    render() {
        return (
            <form>
                <input placeholder="name" name="name" value={this.state.name} onChange={this.handleChange}></input>
                <label htmlFor="date-activity-input">date</label>
                <input type="date" name="date" value={this.state.date} required id="date-activity-input" />
                <label htmlFor="start-time-activity-input">time</label>
                <input type="time" name="time" value={this.state.time} required id="start-time-activity-input" />
                <input placeholder="duration" name="duration" value={this.state.duration} onChange={this.handleChange}></input>
                <textarea placeholder="notes" name="notes" value={this.state.notes} ></textarea>
                <input type="number" name="price" placeholder="price" value={this.state.price}></input>

            </form>
        )
    }
}
