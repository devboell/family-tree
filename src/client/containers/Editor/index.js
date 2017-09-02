import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { compose, isEmpty } from 'lodash/fp'

import EditorControls from 'components/EditorControls'
import PersonEditor from 'components/PersonEditor'

import { setCreateMode } from './actions'
// import { selectPersonId, prepareCreatePerson, createPerson, removePerson } from './thunks'
import withRelations from './enhancers'

import Wrapper from './Wrapper'
import EditorWrapper from './EditorWrapper'

const newPerson = {
  name: '',
  bornToId: null,
  partners: [],
}

const convertFormValuesToSchema = values => (
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
    const { onSetCreateMode, selectedPersonId } = nextProps
    if (selectedPersonId !== 'unselect') {
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
      onSetSelectedPersonId,
      createPersonMutation,
      updatePersonMutation,
      removePersonMutation,
      onPrepareCreatePerson,
      createMode,
    } = this.props

    const createPersonSubmit = async (values) => {
      const result = await createPersonMutation(convertFormValuesToSchema(values))
      await refetch()
      onSetSelectedPersonId(result.data.createPerson.id)
    }

    const updatePersonSubmit = values =>
      updatePersonMutation(convertFormValuesToSchema(values))

    const removePersonSubmit = async (id) => { // not really form submit
      await removePersonMutation({ id })
      await refetch()
      onSetSelectedPersonId('preselect')
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
        <EditorWrapper>
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
        </EditorWrapper>
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
  selectedPersonId: PropTypes.string.isRequired,
  onSetSelectedPersonId: PropTypes.func.isRequired,

  // from redux
  createMode: PropTypes.bool.isRequired,
  onSetCreateMode: PropTypes.func.isRequired,
  onPrepareCreatePerson: PropTypes.func.isRequired,
}

Editor.defaultProps = {
  relations: [],
}

const mapStateToProps = state => ({
  createMode: state.editor.createMode,
})

export const mapDispatchToProps = (dispatch, ownProps) => ({
  onSetCreateMode: flag => dispatch(setCreateMode(flag)),
  onPrepareCreatePerson: () => {
    ownProps.onSetSelectedPersonId('unselect')
    dispatch(setCreateMode(true))
  },
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRelations,
)(Editor)
