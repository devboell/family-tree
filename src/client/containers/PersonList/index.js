import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { compose, isEmpty, find } from 'lodash/fp'

import withPersons from './enhancers'
import { setSelectedPersonId } from './actions'

import Wrapper from './Wrapper'
import ChildWrapper from './ChildWrapper'
import Ul from './Ul'
import Li from './Li'
import Button from './Button'

export class PersonList extends Component {
  componentWillReceiveProps(nextProps) {
    const {
      loading,
      persons,
      selectedPersonId,
      onSetSelectedPersonId,
    } = nextProps

    const selectFirst =
      !loading &&
      persons.length &&
      selectedPersonId === 'preselect'

    if (selectFirst) {
      onSetSelectedPersonId(persons[0].id)
    }
  }

  render() {
    const {
      loading,
      persons,
      refetch,
      selectedPersonId,
      onSetSelectedPersonId,
      onSelectFirst,
      children,
    } = this.props

    if (loading) return <Wrapper>loading ...</Wrapper>

    return (
      <Wrapper>
        {isEmpty(persons)
          ? <div>no persons found</div>
          : <Ul>
            {persons.map(person =>
              <Li key={`person-${person.id}`}>
                <Button
                  isSelected={person.id === selectedPersonId}
                  onClick={() => onSetSelectedPersonId(person.id)}
                >
                  {person.name}
                </Button>
              </Li>,
            )}
          </Ul>
        }

        <ChildWrapper>
          {React.cloneElement(
            React.Children.only(children),
            {
              personId: selectedPersonId,
              person: find({ id: selectedPersonId })(persons) || {},
              selectedPersonId,
              onSetSelectedPersonId,
              onSelectFirst,
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
  onSelectFirst: PropTypes.func.isRequired,
  onSetSelectedPersonId: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
}

PersonList.defaultProps = {
  persons: [],
}

const mapStateToProps = state => ({
  selectedPersonId: state.personList.selectedPersonId,
})


const mapDispatchToProps = dispatch => ({
  onSetSelectedPersonId: id => dispatch(setSelectedPersonId(id)),
  onSelectFirst: () => dispatch(setSelectedPersonId('selectFirst')),
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withPersons,
)(PersonList)
