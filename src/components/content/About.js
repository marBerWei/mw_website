import React from 'react'
import Awards from '../header/Awards'
import Menu from '../menu/MenuContainer'
import SpineImage from '../header/SpineImage'

const About = () => {
	return(
		<div className="about">
			<SpineImage />
			<Awards/>
			<Menu/>

			<div className="aboutContainer">
				<div className="aboutBackground">
					<div className="aboutContent">
						<div className="menuTitle">Get to know Dr. Mark...</div><br/>
						<iframe 
						width="1020" 
						height="630" 
						src="https://www.youtube.com/embed/cgMabN6W7VU" 
						frameborder="0" 
						gesture="media" 
						allow="encrypted-media" 
						allowfullscreen>
					</iframe><br/><br/>
						click to see full bio...<br/>
						Mark Weidenbaum, MD, treats a broad range of spinal disorders in 
						adults and children, including deformities, arthritis, 
						trauma, tumors, instability, and degenerative conditions. 
						His surgical procedures range from minimally invasive, 
						microsurgical approaches to complex spinal reconstructions.<br/><br/>
						Dr. Weidenbaum is active in basic science as well as 
						clinical research and has published numerous scientific 
						articles in peer-reviewed journals. He is particularly 
						interested in spinal deformity and degeneration and travels 
						regularly to participate in scientific exchanges and care for 
						patients with challenging conditions. 
						Dr. Weidenbaum holds leadership roles in national 
						and international spine surgery organizations.<br/>
					

					</div>
				</div>

			</div>
		</div>
	)
}

export default About