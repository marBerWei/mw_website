import React from 'react'
import MdSchedule from 'react-icons/lib/md/schedule'
import MdLightbulbOutline from 'react-icons/lib/md/lightbulb-outline'
import FaQuestion from 'react-icons/lib/fa/question'
class Resources extends React.Component{
	render(){
		return(
			<div className="resources">
			<h1>Learn More</h1>
			 <div className="resourcesContainer">
				<div className = "resourcesItem">
					<div className="imageContainer"> 
						<img className="resourceImage" src={require('./appointment.jpg')}/>
					</div>
					<div className = "resourceContent">
						<button className="button">Schedule an Appointment</button>
					</div>
				</div>
				<div className = "resourcesItem">
					<div className="imageContainer"> 
						<img className="resourceImage" src={require('./woman-back.jpeg')}/>
					</div>
					<div className = "resourceContent"> 
						<button className="button">Research Your Condition</button>
					</div>
				</div>
				<div className = "resourcesItem">
					<div className="imageContainer"> 
						<img className="resourceImage" src={require('./books.jpg')}/>
					</div>
					<div className = "resourceContent"> 
						<button className="button">Read Our FAQ page</button>
					</div>
				</div>
			 </div>
			</div>
		)
	}
}

export default Resources