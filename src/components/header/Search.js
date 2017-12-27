import React from 'react'

class Search extends React.Component {
	render(){
		return(
			<div className="search">
				<form id="mySearchForm">
					<input className="searchBox" placeholder="Search..."/>
				</form>
			</div>
		)
	}
}

export default Search