import React from 'react'
import Awards from '../header/Awards'

const About = () => {
	return(
		<div className="about">
			<Awards/>
			<iframe 
				width="1120" 
				height="630" 
				src="https://www.youtube.com/embed/cgMabN6W7VU" 
				frameborder="0" 
				gesture="media" 
				allow="encrypted-media" 
				allowfullscreen>
			</iframe>
		</div>
	)
}

export default About