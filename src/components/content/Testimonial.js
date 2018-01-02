import React from 'react'
import TiThumbsUp from 'react-icons/lib/ti/thumbs-up'
class Testimonial extends React.Component {
	render(){
	return(
		<div className="testimonial">
			<div className="testimonialContainer">
				<div className="testimonial1">
					"Dr. Weidenbaum helped me understand 
					exactly what he was going to do. That was 
					extremely reassuring, considering that 
					this was not going to be an easy surgery. 
					Dr, Weidenbaum personally came down to 
					the lobby to speak to my family to reassure 
					them that everything was ok. He shows 
					compassion towards his patients and if it 
					is possible to give him more than 
					five stars I would."
				</div>
				<div className="testimonial2">
					<img
					className ="testImg"
          			src={require('./five-stars.png')}
        			/>
				</div>
				<div className="testimonial3">
					<div className="iconFlip"><TiThumbsUp/></div>
					<div className="icon"><TiThumbsUp/></div>
				</div>
				<div className="testimonial4">
					"Beyond his technical skills as a surgeon, 
					Dr. Weidenbaum is a thoughtful, friendly 
					person with a real ability to communicate 
					with his patients."
				</div>
			</div>
		</div>
	)
	}
}

export default Testimonial