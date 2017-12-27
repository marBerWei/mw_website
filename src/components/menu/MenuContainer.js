import React from 'react'

class Menu extends React.Component {
	render(){
		return (
			<div className="menu">
			<img
				className = "dadPic"
          	src={require('./dadPic.png')}
        	/>
        <div>Dr. Mark Weidenbaum</div>
        <span><p>Dr. Mark Weidenbaum
				Lorem ipsum dolor sit amet, 
				consectetur adipiscing elit. 
				Phasellus volutpat sapien non diam viverra, 
				quis laoreet neque efficitur. 
				Cras fermentum erat vel lectus 
				finibus, eu efficitur lorem accumsan. 
				Etiam congue quis dui quis efficitur. 
				Phasellus commodo neque at posuere congue. 
				Nunc fermentum convallis nisl, at porttitor 
				lorem finibus sed. Ut eu fringilla eros. 
				Etiam pretium vulputate odio, sed 
				placerat nulla placerat vel. 
				Sed dui velit, condimentum quis malesuada sed,
				 scelerisque vel mi. Fusce et sagittis neque. 
				 Suspendisse potenti. Vestibulum eros dolor, 
				 vulputate at imperdiet vitae, feugiat in quam.
				 </p></span>
			</div>
		)
	}
}

export default Menu