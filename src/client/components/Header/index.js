import React from 'react'

import StyledNavLink from './StyledNavLink'

const Header = () =>
  <div>
    <StyledNavLink exact to="/"><h3>Tree</h3></StyledNavLink>
    <StyledNavLink to="/editor"><h3>Editor</h3></StyledNavLink>
  </div>


export default Header
