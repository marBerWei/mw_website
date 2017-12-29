import React from 'react'

const Awards = (props) => {
	return(
		<div className="awardWrapper">
			<div className="awardContainer">
				<img className="awards" src={require('./nyp-logo.png')}/>
			</div>
			<div className="awardContainer">
				<img className="awards" src={require('./bestHospOrtho.png')}/>
			</div>
			<div className="awardContainer">
				<img className="awards" src={require('./columbiadoctors.png')}/>
			</div>
			<div className="awardContainer">
				<img className="awardsBest" src={require('./srs.png')}/>
			</div>
			<div className="awardContainer">
				<img className="awardAAOS" src={require('./aaos.svg')}/>
			</div>
		</div>
	)
}

export default Awards

// <img className="awards" src={require('./aaos.svg')}/>