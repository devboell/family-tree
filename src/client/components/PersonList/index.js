import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import Ul from './Ul'
import Li from './Li'
import Button from './Button'


class PersonList extends Component {
  componentDidMount() {
    const { persons, selectedPersonId, shouldPreselect, onSelectPersonId } = this.props

    if (persons.length &&
       selectedPersonId === 'no_selection' &&
       shouldPreselect) {
      onSelectPersonId(persons[0].id)
    }
  }

  render() {
    const {
      persons,
      selectedPersonId,
      onSelectPersonId,
    } = this.props

    return (
      <Ul>
        {persons.map(person =>
          <Li key={`person-${person.id}`}>
            <Button
              isSelected={person.id === selectedPersonId}
              onClick={() => onSelectPersonId(person.id)}
            >
              {person.name}
            </Button>
          </Li>,
        )}
      </Ul>
    )
  }
}

PersonList.propTypes = {
  persons: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  selectedPersonId: PropTypes.string.isRequired,
  shouldPreselect: PropTypes.bool.isRequired, // eslint-disable-line react/no-unused-prop-types
  onSelectPersonId: PropTypes.func.isRequired,
}

PersonList.defaultProps = {
  shouldPreselect: true,
}

export default PersonList
