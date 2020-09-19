import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { AddTrip } from '../cmps/Home/AddTrip';
import { TripFilter } from '../cmps/Home/TripFilter';
import { TripList } from '../cmps/Home/TripList';
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
                    <section className="slideShow">
                            <TripSlider trips={this.props.trips} />
                    </section>
                </div>  
                <div className="main-container main-home-page">

                    <AddTrip />
                    <h2>Most Popular Trips</h2>
                    <div>
                        {/* <i className="fas fa-chevron-circle-right  trips-pagination trips-pagination-forward"></i> */}
                        {<TripList trips={this.props.trips} /> || <p>Loading Trips . . .</p>}
                        {/* <i className="fas fa-chevron-circle-left trips-pagination trips-pagination-backward"></i> */}
                    </div>

                    <h2>All Trips</h2>
                    <Link to="/trip">
                        <button className="styled-button" >Explore our planned trips</button>
                    </Link>
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