import { reviewService } from '../../services/reviewService';


export const reviewActions = {
    loadReviews,
    addReview
}

function loadReviews(review) {
    return async dispatch => {
        try {
            const reviews = await reviewService.query(review);
            dispatch({ type: 'SET_REVIEWS', reviews });

        } catch (err) {
            console.log('ReviewActions: err in loadReviews', err);
        }
    };
}

function addReview(review) {
    reviewService.add(review)
    return async dispatch => {
        try {
            const addedReview = await reviewService.add(review);
            dispatch({ type: 'REVIEW_ADD', review: addedReview });
        } 
        catch (err) {
            console.log('ReviewActions: err in addReview', err);
        }
    }
}
