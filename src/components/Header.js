import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../index.css'
const Header = () => {
  return (
    <div class="header">
        {/* <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link> */}
        {/* NavLink send you the message which link is active also navlink gives us the extra classname   which is called active */}
        <NavLink to="/auth">Home</NavLink>
        <NavLink to="/posts">Posts</NavLink>

    </div>
  )
}

export default Header