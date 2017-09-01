import React from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { compose, find, isEmpty } from 'lodash/fp'

import PersonList from 'components/PersonList'
import EditorControls from 'components/EditorControls'
import PersonEditor from 'components/PersonEditor'

import { selectPersonId, prepareCreatePerson, createPerson, removePerson } from './thunks'
import enhancers from './enhancers'

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

export const EditorPage = ({
  personsQuery,
  relationsQuery,
  personsQuery: { persons },
  relationsQuery: { relations },
  createPersonMutation,
  updatePersonMutation,
  removePersonMutation,
  selectedPersonId,
  onPrepareCreatePerson,
  onCreatePerson,
  onRemovePerson,
  onSelectPersonId,
  createMode,
}) => {
  const createPersonSubmit = values =>
    createPersonMutation(convertFormValuesToSchema(values)).then(result =>
      onCreatePerson(result.data.createPerson.id))

  const updatePersonSubmit = values =>
    updatePersonMutation(convertFormValuesToSchema(values))

  const removePersonSubmit = (id) => { // not really form submit
    onRemovePerson()
    removePersonMutation({ id })
  }

  const personToEdit = createMode
    ? newPerson
    : find({ id: selectedPersonId })(persons)

  const showEditor = !isEmpty(personToEdit)


  return (
    relationsQuery.loading || personsQuery.loading
    ? <div>loading ...</div>
    :
    <Wrapper>
      <PersonList
        {...{ persons, onSelectPersonId, selectedPersonId }}
      />
      <EditorWrapper>
        <EditorControls
          {...{ onPrepareCreatePerson }}
          showRemove={selectedPersonId !== 'no_selection'}
          onRemovePerson={() => removePersonSubmit(selectedPersonId)}
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

EditorPage.propTypes = {
  personsQuery: PropTypes.shape({}).isRequired,
  relationsQuery: PropTypes.shape({}).isRequired,
  createPersonMutation: PropTypes.func.isRequired,
  updatePersonMutation: PropTypes.func.isRequired,
  removePersonMutation: PropTypes.func.isRequired,
  selectedPersonId: PropTypes.string.isRequired,
  createMode: PropTypes.bool.isRequired,
  onSelectPersonId: PropTypes.func.isRequired,
  onPrepareCreatePerson: PropTypes.func.isRequired,
  onCreatePerson: PropTypes.func.isRequired,
  onRemovePerson: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  selectedPersonId: state.editor.selectedPersonId,
  createMode: state.editor.createMode,
  isRemoving: state.editor.isRemoving,
})

export const mapDispatchToProps = dispatch => ({
  onSelectPersonId: id => dispatch(selectPersonId(id)),
  onPrepareCreatePerson: () => dispatch(prepareCreatePerson()),
  onCreatePerson: id => dispatch(createPerson(id)),
  onRemovePerson: () => dispatch(removePerson()),
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  enhancers,
)(EditorPage)
