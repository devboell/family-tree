import React from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'lodash/fp'

import EditorControls from 'components/EditorControls'
import PersonEditor from 'components/PersonEditor'
import PersonList from 'components/PersonList'

import { selectPerson, createPerson, removePerson } from './thunks'
import enhancers from './enhancers'
import { editModes } from './constants'

import Wrapper from './Wrapper'
import EditorWrapper from './EditorWrapper'


const convertPartnerValues = values => (
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
  relationsQuery,
  personsQuery,
  relationsQuery: { relations },
  personsQuery: { persons },
  createPersonMutation,
  updatePersonMutation,
  removePersonMutation,
  editMode,
  onSelectPerson,
  onCreatePerson,
  onRemovePerson,
  selectedPerson,
}) => {
  const onSubmit = (editMode === editModes.CREATE)
    ? (values) => {
      createPersonMutation(convertPartnerValues(values)).then((result) => {
        onSelectPerson(result.data.createPerson)
      })
    }
    : (values) => { updatePersonMutation(convertPartnerValues(values)) }

  const editorProps = {
    disabled: editMode === editModes.DISABLED,
    onSubmit,
    initialValues: selectedPerson,
    partners: selectedPerson.partners,
    persons,
    relations,
  }

  return (
    relationsQuery.loading || personsQuery.loading
    ? <div>loading ...</div>
    : <Wrapper>
      <PersonList {...{ persons, onSelectPerson, selectedPerson }} />
      <EditorWrapper>
        <EditorControls
          {...{
            editMode,
            selectedPerson,
            onCreatePerson,
            onRemovePerson,
            removePersonMutation,
          }}
        />
        <PersonEditor {...editorProps} />
      </EditorWrapper>
    </Wrapper>
  )
}
EditorPage.propTypes = {
  relationsQuery: PropTypes.shape({}).isRequired,
  personsQuery: PropTypes.shape({}).isRequired,
  createPersonMutation: PropTypes.func.isRequired,
  updatePersonMutation: PropTypes.func.isRequired,
  removePersonMutation: PropTypes.func.isRequired,
  editMode: PropTypes.string.isRequired,
  onSelectPerson: PropTypes.func.isRequired,
  onCreatePerson: PropTypes.func.isRequired,
  onRemovePerson: PropTypes.func.isRequired,
  selectedPerson: PropTypes.shape({}).isRequired,
}

const mapStateToProps = state => ({
  editMode: state.editor.editMode,
  selectedPerson: state.editor.selectedPerson,
})

const mapDispatchToProps = dispatch => ({
  onSelectPerson: id => dispatch(selectPerson(id)),
  onCreatePerson: () => dispatch(createPerson()),
  onRemovePerson: () => dispatch(removePerson()),
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  enhancers,
)(EditorPage)
