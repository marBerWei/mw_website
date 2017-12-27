import React from 'react'

class ReviewItem extends React.Component {
	render(){
		return(
			<div className="reviewItem">
				<div><h2>{this.props.review.name}</h2></div>
				<img
					className = "starPic"
          src={require('./five-stars.png')}
        />
				<div><p>"{this.props.review.content}"</p></div>
			</div>
		)
	}
}

export default ReviewItem