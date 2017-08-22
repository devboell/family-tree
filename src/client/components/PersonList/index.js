import React from 'react'
import { PropTypes } from 'prop-types'
import Ul from './Ul'
import Li from './Li'
import Button from './Button'

const PersonList = ({ persons, onSelectPerson }) =>
  <Ul>
    {persons.map(person =>
      <Li key={`person-${person.id}`}>
        <Button
          onClick={() => onSelectPerson(person)}
        >
          {person.name}
        </Button>
      </Li>,
    )}
  </Ul>

PersonList.propTypes = {
  persons: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onSelectPerson: PropTypes.func.isRequired,
}

export default PersonList
