import React, { PropTypes } from 'react'
import Li from './Li'

const ListItem = ({ name }) =>
  <Li><h3>{name}</h3></Li>


ListItem.propTypes = {
  name: PropTypes.string.isRequired
}


export default ListItem
