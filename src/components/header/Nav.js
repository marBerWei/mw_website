import React from 'react'
import { NavLink } from 'react-router-dom'

class Nav extends React.Component {
  render() {
    return (
      <ul>
        <li><NavLink activeClassName="active" className="dropbtn" to="/contact">CONTACT</NavLink></li>
        <li class="dropdown">
          <a href="javascript:void(0)" class="dropbtn">TESTIMONIALS</a>
          <div class="dropdown-content">
            <NavLink activeClassName="active" to="/reviews">Patients</NavLink>
            <a href="#">Doctors</a>
          </div>
        </li>
        <li><a href="#news">NEWS</a></li>

        <li class="dropdown">
          <a href="javascript:void(0)" class="dropbtn">PATIENTS</a>
          <div class="dropdown-content">
            <NavLink activeClassName="active" to="/educate">Education</NavLink>
            <a href="#">FAQ</a>
          </div>
        </li>
        <li><NavLink activeClassName="active" className="dropbtn" to="/">ABOUT</NavLink></li>
      </ul>
    )
  }
}


export default Nav

// <div className="nav">
//         <NavLink activeClassName="active" className="dropbtn" to="/">
//         ABOUT
//         <div className="dropdown">
//           <div className="dropdown-content">
//             Hello from the dropdown
//           </div>
//         </div>
//         </NavLink>
//         <NavLink activeClassName="active" to="/educate">PATIENTS</NavLink>
//         <NavLink activeClassName="active" to="/news">NEWS</NavLink>
//         <NavLink activeClassName="active" to="/contact">CONTACT</NavLink>
//         <NavLink activeClassName="active" to="/reviews">REVIEWS</NavLink>
//       </div>