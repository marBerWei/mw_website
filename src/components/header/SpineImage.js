import React from 'react'

class SpineImage extends React.Component {
	render(){
		return (
				<img
          className = "spinePic"
          src={require('./bench.jpg')}/>
    )
  }
}

export default SpineImage