import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Router, Switch, withRouter } from 'react-router-dom'
import { loadTrip } from '../store/actions/tripActions'
import { TripAssembly } from '../cmps/TripAssembly'
import { TripRoute } from '../cmps/TripRoute'
import { tripService } from '.././services/tripService'
import { TripNavBar } from '../cmps/TripNavBar'

class _TripApp extends Component {

    state = {
        trip: ''
    }

    async componentDidMount() {
        const { id } = this.props.match.params
        try {

            const trip = await this.props.loadTrip(id)
            console.log(trip);
            this.setState({ trip })
        }
        catch (err) {
            console.log('tripApp could not find toy', err);
        }
    }



    render() {
        const { trip } = this.state
        if (!trip) return <div>Loading....</div>
        return (
            <div className="trip-app">
                <TripNavBar tripId={trip._id} />
                <Switch>
                    <Route path="/trip/:id/triproute">
                        <TripRoute trip={trip}></TripRoute>
                    </Route>
                    <Route path="/trip/:id/tripassembly">
                        <TripAssembly trip={trip}></TripAssembly>
                    </Route>
                </Switch>
                <p>{trip.destinations[0].name}</p>
            </div >
        )
    }
}


const mapStateToProps = state => {
    return {
        trips: state.tripReducer.trips
    }
}
const mapDispatchToProps = {
    loadTrip
}
export const TripApp = connect(mapStateToProps, mapDispatchToProps)(withRouter(_TripApp))