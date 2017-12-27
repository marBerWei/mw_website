import React from 'react'
import { NavLink } from 'react-router-dom'

class Nav extends React.Component {
  render() {
    return (
      <div className="nav">
        <NavLink activeClassName="active" className="item" to="/">ABOUT</NavLink>
        <NavLink activeClassName="active" className="item" to="/educate">PATIENTS</NavLink>
        <NavLink activeClassName="active" className="item" to="/news">NEWS</NavLink>
        <NavLink activeClassName="active" className="item" to="/contact">CONTACT</NavLink>
        <NavLink activeClassName="active" className="item" to="/reviews">REVIEWS</NavLink>
      </div>
    )
  }
}


export default Nav

