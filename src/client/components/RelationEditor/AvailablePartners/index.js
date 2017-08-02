import React from 'react'
import { PropTypes } from 'prop-types'

import Ul from './Ul'
import Li from './Li'
import AddButton from './AddButton'

const newPartner = person => ({
  relationId: null,
  partner: {
    id: person.id,
    name: person.name,
  },
  children: [],
})

const AvailablePartners = ({ persons, fields }) =>
  <Ul>
    {persons.map(person => (
      <Li key={`avail-partners-${person.id}`}>
        <AddButton type="button" onClick={() => { fields.push(newPartner(person)) }}>add</AddButton>
        {person.name}
      </Li>
    ))}
  </Ul>

AvailablePartners.propTypes = {
  persons: PropTypes.array.isRequired,
  fields: PropTypes.object.isRequired,
}


export default AvailablePartners
