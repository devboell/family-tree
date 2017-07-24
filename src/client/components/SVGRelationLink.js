import React from 'react'
import { PropTypes } from 'prop-types'

const SVGRelationLink = ({
  originX,
  originY,
  targetX,
}) => (
  <path stroke="red" d={`M ${originX} ${originY} H ${targetX}`} />
)

SVGRelationLink.propTypes = {
  originX: PropTypes.number.isRequired,
  originY: PropTypes.number.isRequired,
  targetX: PropTypes.number.isRequired,
}


export default SVGRelationLink
