import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadTrips } from '../store/actions/tripActions'
import { Assembly } from '../cmps/Assembly'
import { Route } from '../cmps/Route'
import { Router } from 'react-router'

class _TripApp extends Component {

    componentDidMount() {
        this.props.loadTrips()
    }

    render() {
        if (!trips) return <div>Loading....</div>
        return (
            <div className="trip-app">
                
                TripApp
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        trips: state.tripReducer.trips
    }
}
const mapDispatchToProps = {
    loadTrips
}
export const TripApp = connect(mapStateToProps, mapDispatchToProps)(_TripApp)