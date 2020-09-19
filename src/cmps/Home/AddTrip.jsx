import React, { Component } from 'react'
import { utils } from '../../services/utils'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { addTrip } from '../../store/actions/tripActions'



class _AddTrip extends Component {


    state = {
        currTrip: {
            name: '',
            startDate: '',
            endDate: '',
        },
        destinations: ''
    }

    onSetDestinations = (ev) => {
        ev.preventDefault()
        const newtrip = this.state.currTrip
        newtrip.startDate = new Date(newtrip.startDate).getTime()
        newtrip.endDate = new Date(newtrip.endDate).getTime()
        newtrip.lat = 
        console.log(newtrip);
        this.setState({
            destinations: [...this.state.destinations, newtrip],
            currTrip: {
                name: '',
                startDate: '',
                endDate: '',
            }
        })
    }

    onSaveDestination = async (ev) => {
        ev.preventDefault();
        await this.onSetDestinations(ev)
        const trip = {
            destinations: this.state.destinations
        }
        const newTrip = await this.props.addTrip(trip)
        this.props.history.push(`/trip/${newTrip._id}/triproute`)
    }

    getRandomLatLng(){

    }


    handleInput = (ev) => {
        console.log(ev.target.value);
        let value = ev.target.value
        if (ev.target.type === 'number') value = +ev.target.value;
        this.setState({ ...this.state, currTrip: { ...this.state.currTrip, [ev.target.name]: ev.target.value } })
    }


    formatDate = (date) => {
        return `${new Date(date).getDate()}/${new Date(date).getMonth() + 1}/${new Date(date).getFullYear()}`
    }
    render() {
        return (
            <div className="flex add-destination-form-wraper">
                <form className="flex column add-destination-form" onSubmit={this.onSetDestinations}>
                    <div className="flex column">
                        <label htmlFor="add-dest-input">Add Destination:</label>
                        <input type="text"
                            name="name"
                            placeholder="Enter City Name"
                            id="add-dest-input"
                            value={this.state.currTrip.name}
                            required
                            onChange={this.handleInput}
                        />
                    </div>
                    <div className="flex">
                        <div className="flex column">
                            <label htmlFor="startdate-dest-input">Start At</label>
                            <input type="date"
                                name="startDate"
                                required
                                id="startdate-dest-input"
                                value={this.state.currTrip.startDate}
                                onChange={this.handleInput}
                            />
                        </div>
                        <div className="flex column">
                            <label htmlFor="enddate-dest-input">End At</label>
                            <input type="date"
                                name="endDate"
                                required
                                id="enddate-dest-input"
                                value={this.state.currTrip.endDate}
                                onChange={this.handleInput}
                            />
                        </div>
                    </div>
                    <button onSubmit={this.onSetDestinations}>Add next destination</button>
                    {this.state.destinations.length ? <ol className="trip-list-add-form flex column">
                        {this.state.destinations.map(dest => <li key={utils.makeId()} className="flex Justify-between">
                            <p>{dest.name}</p>
                            <div className="flex">
                                <p>{this.formatDate(dest.startDate)}</p> -
                                <p>{this.formatDate(dest.endDate)}</p>
                            </div>
                        </li>)}
                    </ol> : ''}
                    <button onClick={this.onSaveDestination}>Save changes</button>
                </form>
                <div className="add-dest-img-wraper">
                    <img src="https://images.unsplash.com/photo-1484804959297-65e7c19d7c9f?ixlib=rb-1.2.1" alt="" />
                </div>
            </div>
        )
    }
}



const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = {
    addTrip
}

export const AddTrip = connect(mapStateToProps, mapDispatchToProps)(withRouter(_AddTrip));