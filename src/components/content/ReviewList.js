import React from 'react'
import ReviewItem from './ReviewItem'

const ReviewList = (props) =>{
	const currentReviews = props.reviews.map((review, index) => {
		return <ReviewItem key={index} review={review}/>
	})
	return(
		<div className='reviewList'>{currentReviews}</div>
	)
}

export default ReviewList