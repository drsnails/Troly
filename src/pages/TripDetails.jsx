import React, { Component } from 'react'
import { connect } from 'react-redux'

import { utils } from '../services/utils'
import { TripPreview } from '../cmps/Home/TripPreview'
import { Link, withRouter } from 'react-router-dom'
import { ReviewList } from '../cmps/tripReviews/ReviewList'
import { reviewActions } from '../store/actions/reviewActions'
import { loadTrip } from '../store/actions/tripActions'
import { showModal } from '../store/actions/modalActions'
import { closeMsg, showMsg } from '../store/actions/msgActions'




class _TripDetails extends Component {

    state = {
        trip: '',
        isReviewOpen: false,
    }

    async componentDidMount() {
        const { id } = this.props.match.params
        try {
            const trip = await this.props.loadTrip(id)
            console.log(trip);
            await this.setState({ trip })
            await this.props.loadReviews({ tripId: this.state.trip._id })
        }
        catch (err) {
        }
    }

    onToggleExpend = () => {
        this.setState({ isReviewOpen: true })
    }


    addReview = async (review) => {
        review.byUserId = this.props.loggedInUser._id
        review.trip = this.state.trip._id
        await reviewActions.addReview(review)
        await this.props.loadReviews({ toyId: this.state.toy._id })
    }

    render() {
        const { trip } = this.state
        if (!trip) return <p> Loading . . .</p>

        return (
            <div className="reviews-page">
                <TripPreview trip={trip} img={utils.getRandomPic()} style={{ pointerEvents: 'none' }} addClass={'details'} />
                <div className="addreview-container">
                    <Link to={`/trip/${trip._id}/triproute`}>
                        <button onClick={this.props.closeModal} className="styled-button">Explore this trip</button>
                    </Link>
                    <ReviewList reviews={trip.reviews} />
                    <div className="flex reviews-btns-container">
                        <button className="review-btns styled-button" onClick={() => this.props.showModal('add-review', { addReview: this.addReview })}>Add Review</button>
                        <button className="review-btns styled-button" onClick={() => { this.props.history.push('/trip') }}>Back</button>
                    </div>
                </div>

            </div >
        )
    }
}

const mapStateToProps = state => {
    return {
        reviews: state.reviewReducer.reviews,
    }
}

const mapDispatchToProps = {
    addReview: reviewActions.addReview,
    loadReviews: reviewActions.loadReviews,
    loadTrip,
    showModal,
}

export const TripDetails = connect(mapStateToProps, mapDispatchToProps)(withRouter(_TripDetails))
