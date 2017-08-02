import React from 'react'
import { PropTypes } from 'prop-types'

import { editModes } from '../../containers/EditorPage/constants'

import Wrapper from './Wrapper'
import Button from './Button'

const EditorControls = ({
  editMode,
  selectedPerson,
  onCreatePerson,
  onRemovePerson,
  removePersonMutation,
}) =>
  <Wrapper>
    <Button onClick={onCreatePerson}>New</Button>
    {editMode === editModes.UPDATE
      ?
        <Button
          onClick={
            () => {
              removePersonMutation({ id: selectedPerson.id })
              .then(onRemovePerson())
            }
          }
        >
          Remove
        </Button>
      : null
    }
  </Wrapper>

EditorControls.propTypes = {
  editMode: PropTypes.string.isRequired,
  selectedPerson: PropTypes.shape({}).isRequired,
  onCreatePerson: PropTypes.func.isRequired,
  onRemovePerson: PropTypes.func.isRequired,
  removePersonMutation: PropTypes.func.isRequired,
}

export default EditorControls
