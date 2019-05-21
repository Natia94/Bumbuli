import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = (props) => {
  return (
    <div>
        <nav className = "teal lighten-2">
          <div className="nav-wrapper">
          <a href="/" className="brand-logo center">Bumbuli</a>
            <ul id="nav-mobile" class="right hide-on-med-and-down"> 
            <li><Link to="/wiki/add"><i className="fa fa-plus"></i> Add Article </Link></li> 
            <li><Link to="/wiki/authors"><i className="fa fa-user"></i> Authors </Link></li>     
            </ul>
          </div>
        </nav>
      </div>
  )
}

export default Navbar
