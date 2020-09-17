import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { TripFilter } from '../cmps/Home/TripFilter';
import { TripList } from '../cmps/Home/TripList';
import { loadTrips } from '../store/actions/tripActions'


class _HomePage extends Component {
    state = {
        trips: ''
    }

    async componentDidMount() {
        const trips = await this.props.loadTrips()
    }

    // getTripsForDisplay = () => {
    //     this.props.trips.filter(trip=> trip)
    // }


    render() {
        // const {trips} =this.state
        // if (!trips) return <p>Loading Trips . . .</p>
        return (

            <div className="home-page ">
                {/* {this.getTripPrice()} */}
                <div className="home-page-hero" >
                    <Link to="/trip/438577i4h48fu049f/triproute">
                        <button>Eplore</button>
                    </Link>
                </div>
                <div className="main-container">
                    <h2>Most Popular Trips</h2>
                    <div>
                        <i className="fas fa-chevron-circle-right  trips-pagination trips-pagination-forward"></i>
                        {<TripList trips={this.props.trips} /> || <p>Loading Trips . . .</p>}
                        <i className="fas fa-chevron-circle-left trips-pagination trips-pagination-backward"></i>
                    </div>

                    <h2>All Trips</h2>
                    <TripFilter />
                    <TripList trips={this.props.trips} />
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