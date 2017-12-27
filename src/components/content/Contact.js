import React from 'react'
import { SocialIcon } from 'react-social-icons';

const Contact = () => {
	return(
		<div className="contact">
			<h1 className="border">CONTACT</h1>
			<h2>APPOINTMENTS</h2>
			<p>TO REQUEST AN APPOINTMENT, Please Call: ***-***-****</p>
			<h2>OFFICES / HOSPITALS</h2>
			<p>The Spine Hospital <br/> 
			New York-Presbyterian/The Allen Hospital<br/>
			5141 Broadway<br/>
			New York, NY 10034<br/>
			***-***-**** phone<br/>
			***-***-**** fax
			</p>
			<SocialIcon url="http://instagram.com/drmarkweidenbaum/" />
			<SocialIcon url="https://www.linkedin.com/in/mark-weidenbaum-9a385968/"/>
		</div>
	)
}

export default Contact 