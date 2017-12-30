import React from 'react'

class Menu extends React.Component {
	render(){
		return (
		<div className="menuContainer">
			<div className="menu">
		    <div className="menuContent">
					<p className="menuTitle">Dr. Weidenbaum's CV</p>
					<p><strong>College:</strong><br/>
					B.S. Chemistry; University of Connecticut</p>

					<p><strong>Medical School:</strong><br/>
					Columbia University College of Physicians and Surgeons</p>

					<p><strong>Residency:</strong><br/>
					Orthopaedic Surgery,<br/>
					The New York Orthopaedic Hospital at Columbia-Presbyterian Medical Center<br/>
					<br/>
					<strong>Fellowship:</strong><br/>
					Chicago Spine Fellowship; Rush-Presbyterian- St. Luke’s Medical Center, Chicago, Illinois, and The Shriners Hospital for Crippled Children, Oak Park, Illinois<br/>
					<br/>
					<strong>Board Certification:</strong><br/>
					American Board of Orthopaedic Surgery</p>

					<p><strong>Affiliations:</strong><br/>
					</p>
				</div>
			</div>
		</div>
	)
	}
}

export default Menu