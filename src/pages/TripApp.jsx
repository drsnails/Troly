import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Router, Switch, withRouter } from 'react-router-dom'
import { loadTrip } from '../store/actions/tripActions'
import { showModal } from '../store/actions/modalActions'
// import { TripRoute } from '../cmps/TripRoute'
import { tripService } from '.././services/tripService'
import { TripAssembly } from '../cmps/TripAssembly/TripAssembly'
import { TripNavBar } from '../cmps/TripApp/TripNavBar'
import { TripRoute } from '../cmps/TripRoute/TripRoute'
// import locationCevtorRed from 'https://res.cloudinary.com/roidinary/image/upload/v1600377967/locationVectorRed_vzufx4.png'



class _TripApp extends Component {

    state = {
        trip: ''
    }

    async componentDidMount() {
        const { id } = this.props.match.params
        try {

            const trip = await this.props.loadTrip(id)
            this.setState({ trip })
        }
        catch (err) {
            console.log('tripApp could not find trip', err);
        }
    }

    render() {
        const { trip } = this.state
        if (!trip) return <div>Loading....</div>
        return (
            <div className="trip-app main-container ">
                <Switch>
                    <Route path="/trip/:id/triproute">
                        <img className="trip-main-img full" src={this.state.trip.imgUrl}></img>
                        <TripNavBar tripId={trip._id} />
                        <TripRoute trip={trip}></TripRoute>
                    </Route>
                    <Route path="/trip/:id/tripassembly">
                        <TripNavBar tripId={trip._id} />
                        <TripAssembly trip={trip} showModal={this.props.showModal}></TripAssembly>
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
    loadTrip,
    showModal
}
export const TripApp = connect(mapStateToProps, mapDispatchToProps)(withRouter(_TripApp))