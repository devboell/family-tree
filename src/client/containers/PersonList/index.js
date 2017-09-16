import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { compose, isEmpty, find } from 'lodash/fp'

import withPersons from './enhancers'
import { selectPerson, selectFirst, unselect } from './thunks'
import selectionModes from './constants'

import Wrapper from './Wrapper'
import ChildWrapper from './ChildWrapper'
import ListWrapper from './ListWrapper'
import EmptyListMessage from './EmptyListMessage'
import Ul from './Ul'
import Li from './Li'
import Button from './Button'

export class PersonList extends Component {
  componentWillReceiveProps(nextProps) {
    const {
      loading,
      persons,
      onSelectPerson,
      selectionMode,
    } = nextProps

    const shouldSelectFirst =
      !loading &&
      persons.length &&
      selectionMode === selectionModes.SELECT_FIRST

    if (shouldSelectFirst) {
      onSelectPerson(persons[0].id)
    }
  }

  render() {
    const {
      loading,
      persons,
      refetch,
      selectedPersonId,
      selectionMode,
      onSelectPerson,
      onSelectFirst,
      onUnselect,
      children,
    } = this.props

    if (loading) return <Wrapper>loading ...</Wrapper>

    return (
      <Wrapper>
        <ListWrapper>
          {isEmpty(persons)
            ? <EmptyListMessage>no persons found</EmptyListMessage>
            : <Ul>
              {persons.map(person =>
                <Li key={`person-${person.id}`}>
                  <Button
                    isSelected={person.id === selectedPersonId}
                    onClick={() => onSelectPerson(person.id)}
                  >
                    {person.name}
                  </Button>
                </Li>,
              )}
            </Ul>
          }
        </ListWrapper>

        <ChildWrapper>
          {React.cloneElement(
            React.Children.only(children),
            {
              personId: selectedPersonId,
              person: find({ id: selectedPersonId })(persons) || {},
              selectionMode,
              onSelectPerson,
              onSelectFirst,
              onUnselect,
              refetch,
              persons,
            },
          )}
        </ChildWrapper>
      </Wrapper>
    )
  }
}


PersonList.propTypes = {
  loading: PropTypes.bool.isRequired,
  persons: PropTypes.arrayOf(PropTypes.shape({})),
  refetch: PropTypes.func.isRequired,
  selectedPersonId: PropTypes.string.isRequired,
  selectionMode: PropTypes.string.isRequired,
  onSelectPerson: PropTypes.func.isRequired,
  onSelectFirst: PropTypes.func.isRequired,
  onUnselect: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
}

PersonList.defaultProps = {
  persons: [],
}

export const mapStateToProps = state => ({
  selectedPersonId: state.personList.selectedPersonId,
  selectionMode: state.personList.selectionMode,
})


export const mapDispatchToProps = dispatch => ({
  onSelectPerson: id => dispatch(selectPerson(id)),
  onSelectFirst: () => dispatch(selectFirst()),
  onUnselect: () => dispatch(unselect()),
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withPersons,
)(PersonList)
