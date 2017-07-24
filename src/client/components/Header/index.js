import React from 'react'

import { NavLink } from 'react-router-dom'

const Header = () =>
  <div>
    <NavLink to="/">Tree</NavLink>
    <NavLink to="/editor">Editor</NavLink>
  </div>


export default Header
