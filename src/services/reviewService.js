// import httpService from './httpService';
import { utils } from './utils';

export const reviewService = {
    add,
    query,
    remove
};


function query(filterBy) {
  
    if (filterBy) var queryStr = `?tripId=${filterBy.tripId}`;
    // return httpService.get(`review${queryStr}`);
}

function remove(reviewId) {
    // return httpService.delete(`review/${reviewId}`);
}
async function add(review) {
    review.createdAt = Date.now()
    // const addedReview = await httpService.post(`review`, review);
    // return addedReview
}
