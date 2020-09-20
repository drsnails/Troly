import { ReviewPreview } from './ReviewPreview.jsx'
import React from 'react'


export function ReviewList({ reviews }) {
    return (
        <ul className="review-list flex column container">
            <h2>Trip's Reviews: </h2>
            {(!reviews || !reviews.length)? 'No reviews have been written for this trip yet' : reviews.map((review) =>
                <li className="review flex column" key={review.id}>
                    <ReviewPreview review={review} />
                </li>

            )}
        </ul>
    )
}