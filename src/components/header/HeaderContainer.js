import React from 'react'
import Name from './Name'
import Search from './Search'
class Header extends React.Component {
	render(){
		return (
			<div className="header">
				<Name/>
			</div>
		)
	}
}

export default Header

// <Search/>