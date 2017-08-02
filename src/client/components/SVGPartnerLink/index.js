import React from 'react'
import PropTypes from 'prop-types'

const SVGPartnerLink = ({
  originX,
  originY,
  offsetX,
  previousSubTreeWidth,
  dimensions,
}) => {
  const { boxWidth, marginX } = dimensions
  const targetX = (
    (previousSubTreeWidth &&
      (offsetX - (previousSubTreeWidth / 2)) + boxWidth + marginX
    )
    || originX - marginX
  ) + 2

  return (
    <path stroke="red" d={`M ${originX} ${originY} H ${targetX}`} />
  )
}


SVGPartnerLink.propTypes = {
  originX: PropTypes.number.isRequired,
  originY: PropTypes.number.isRequired,
  offsetX: PropTypes.number.isRequired,
  previousSubTreeWidth: PropTypes.number.isRequired,
  dimensions: PropTypes.shape({}).isRequired,
}


export default SVGPartnerLink
