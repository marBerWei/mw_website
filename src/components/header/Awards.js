import React from 'react'

const Awards = (props) => {
	return(
		<div className="awardWrapper">
			<img className="awards" src={require('./nyp-logo.png')}/>
			<img className="awards" src={require('./bestHospOrtho.png')}/>
			<img className="awards" src={require('./columbiadoctors.png')}/>
			<img className="awardsBest" src={require('./srs.png')}/>
			<img className="awardAAOS" src={require('./aaos.svg')}/>
		</div>
	)
}

export default Awards

// <img className="awards" src={require('./aaos.svg')}/>