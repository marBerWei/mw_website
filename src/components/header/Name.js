import React from 'react'
import { NavLink } from 'react-router-dom'

const Name = (props) => {
	return(
		<div>
			<NavLink className="name" to="/">
				<div>MARK <strong>WEIDENBAUM, M.D.</strong></div>
			<div className="nameSub">Professor and Vice Chair for Academic Affairs, Columbia University</div>
			<div className="nameSub">Orthopedic Spine Surgeon</div>
			</NavLink>
		</div>
	)
}

export default Name