import React from 'react'
import { PropTypes } from 'prop-types'

import Wrapper from './Wrapper'
import Button from './Button'

const EditorControls = ({
  onPrepareCreatePerson,
  onRemovePerson,
  showRemove,
}) =>
  <Wrapper>
    <Button onClick={onPrepareCreatePerson}>New</Button>
    {showRemove
      ? <Button onClick={onRemovePerson}>Remove</Button>
      : null
    }
  </Wrapper>

EditorControls.propTypes = {
  onPrepareCreatePerson: PropTypes.func.isRequired,
  onRemovePerson: PropTypes.func.isRequired,
  showRemove: PropTypes.bool.isRequired,
}

export default EditorControls
