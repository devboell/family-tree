import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { compose, isEmpty } from 'lodash/fp'

import EditorControls from 'components/EditorControls'
import PersonEditor from 'components/PersonEditor'

import selectionModes from 'containers/PersonList/constants'

import { setCreateMode } from './actions'
import withRelations from './enhancers'

import Wrapper from './Wrapper'

export const newPerson = {
  name: '',
  bornToId: null,
  partners: [],
}

export const convertFormValuesToSchema = values => (
  {
    ...values,
    partners: values.partners.map(partner => (
      {
        relationId: partner.relationId,
        partnerId: partner.partner.id,
      }
    )),
  }
)

export class Editor extends Component {

  componentWillReceiveProps(nextProps) {
    const { onSetCreateMode, selectionMode } = nextProps
    if (selectionMode !== selectionModes.UNSELECTED) {
      onSetCreateMode(false)
    }
  }

  render() {
    const {
      loading,
      relations,
      person,
      persons,
      refetch,
      onSelectPerson,
      onSelectFirst,
      createPersonMutation,
      updatePersonMutation,
      removePersonMutation,
      onPrepareCreatePerson,
      createMode,
    } = this.props

    const createPersonSubmit = async (values) => {
      const result = await createPersonMutation(convertFormValuesToSchema(values))
      await refetch()
      onSelectPerson(result.data.createPerson.id)
    }

    const updatePersonSubmit = async (values) => {
      await updatePersonMutation(convertFormValuesToSchema(values))
      await refetch()
    }

    const removePersonSubmit = async (id) => { // not really form submit
      await removePersonMutation({ id })
      await refetch()
      onSelectFirst()
    }

    const personToEdit = createMode
      ? newPerson
      : person

    const showEditor = !isEmpty(personToEdit)


    return (
      loading
      ? <div>loading ...</div>
      :
      <Wrapper>
        <EditorControls
          {...{ onPrepareCreatePerson }}
          showRemove={personToEdit.id !== undefined}
          onRemovePerson={() => removePersonSubmit(personToEdit.id)}
        />
        {showEditor
          ?
            <PersonEditor
              onSubmit={createMode ? createPersonSubmit : updatePersonSubmit}
              initialValues={personToEdit}
              partners={personToEdit.partners}
              {...{ persons, relations }}
            />
          : null
        }
      </Wrapper>
    )
  }
}

Editor.propTypes = {
  // from enhancer
  loading: PropTypes.bool.isRequired,
  relations: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  createPersonMutation: PropTypes.func.isRequired,
  updatePersonMutation: PropTypes.func.isRequired,
  removePersonMutation: PropTypes.func.isRequired,

  // from parent
  persons: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  person: PropTypes.shape({}).isRequired,
  refetch: PropTypes.func.isRequired,
  selectionMode: PropTypes.string.isRequired,
  onSelectPerson: PropTypes.func.isRequired,
  onSelectFirst: PropTypes.func.isRequired,

  // from redux
  createMode: PropTypes.bool.isRequired,
  onSetCreateMode: PropTypes.func.isRequired,
  onPrepareCreatePerson: PropTypes.func.isRequired,
}

Editor.defaultProps = {
  relations: [],
}

export const mapStateToProps = state => ({
  createMode: state.editor.createMode,
})

export const mapDispatchToProps = (dispatch, ownProps) => ({
  onSetCreateMode: flag => dispatch(setCreateMode(flag)),
  onPrepareCreatePerson: () => {
    ownProps.onUnselect()
    dispatch(setCreateMode(true))
  },
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRelations,
)(Editor)
