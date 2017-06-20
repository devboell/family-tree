import React from 'react'
import PropTypes from 'prop-types'
import StyledNavLink from './StyledNavLink'

const ListItem = ({ name, path }) =>
  <li>
    <StyledNavLink
      to={`/${path}`}
    >
      <h2>{name}</h2>
    </StyledNavLink>
  </li>


ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
}


export default ListItem
