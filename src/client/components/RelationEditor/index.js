import React from 'react'
import { PropTypes } from 'prop-types'
import Wrapper from './Wrapper'
import Partners from './Partners'
import AvailablePartners from './AvailablePartners'


const RelationEditor = ({
  fields,
  persons,
}) => (
  <Wrapper>
    <Partners {...{ fields }} />
    <AvailablePartners {...{ fields, persons }} />
  </Wrapper>
)

RelationEditor.propTypes = {
  fields: PropTypes.object.isRequired,
  persons: PropTypes.array.isRequired,
}

export default RelationEditor
