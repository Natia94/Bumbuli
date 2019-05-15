import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = (props) => {
  return (
    <div id='navbar' className='row'>
      <Link to="/add">Add</Link>
      <Link to="/wiki/Diary">Diary</Link>
    </div>
  )
}

export default Navbar
