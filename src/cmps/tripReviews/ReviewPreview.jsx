
import React from 'react'
import { LongTxt } from '../MainCmps/LongText';


export function ReviewPreview({ review }) {
    const rating = '⭐'.repeat(review.rating);
    const time = new Date(review.createdAt).toLocaleDateString()
    return (
        < React.Fragment >
            <h3>{review.byUser.username}</h3>
            <div>{rating}</div>
            {review.content && <LongTxt text={review.content} />}
            <small>{time}</small>
        </React.Fragment >
    )
}
