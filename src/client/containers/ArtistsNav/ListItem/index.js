import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Li from './Li'
import Name from './Name'

const ListItem = ({ name, selected, onSelect }) =>
  <Li>
    <Link
      to={`/${name}`}
      onClick={onSelect}
    >
      <Name {...{ selected }}>{name}</Name>
    </Link>
  </Li>


ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  onSelect: PropTypes.func.isRequired,
}


export default ListItem
