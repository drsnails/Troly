import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AddTrip } from '../cmps/Home/AddTrip';
import { TripSlider } from '../cmps/Home/TripSlider';
import { loadTrips } from '../store/actions/tripActions'

class _HomePage extends Component {
    state = {
        trips: ''
    }

    async componentDidMount() {
        await this.props.loadTrips()
    }

    // getTripsForDisplay = () => {
    //     this.props.trips.filter(trip=> trip)
    // }


    render() {
        if (!this.props.trips[0]) return <p>Loading Trips . . .</p>
        return (

            <div className="home-page ">
                {/* {this.getTripPrice()} */}
                <div className="home-page-hero" >
                </div>
                <section className="slideShow">
                    <TripSlider trips={this.props.trips.slice(0, 4)} />
                </section>
                <div className="main-container main-home-page">

                    <AddTrip />
                    <div className="description-section">
                        <h1> Trolly</h1>
                        <h3>Simply Travel</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nesciunt omnis eius, ducimus id eaque saepe et corporis reiciendis, enim maxime alias sint necessitatibus ut repudiandae totam quo sed adipisci.</p>

                    </div>
                </div>
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

export const HomePage = connect(mapStateToProps, mapDispatchToProps)(_HomePage);