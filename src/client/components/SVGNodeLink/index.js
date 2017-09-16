import React from 'react'
import PropTypes from 'prop-types'
import { isEmpty } from 'lodash/fp'

const SVGNodeLink = ({
  x,
  y,
  linkTo,
  dimensions,
}) => {
  const { boxWidth, marginY } = dimensions
  return (
    <g>
      {!isEmpty(linkTo)
        ? <path d={`M ${x + (boxWidth / 2)} ${y} V ${y - (marginY / 2)} H ${linkTo.x} V ${linkTo.y}`} />
        : null
      }
    </g>
  )
}

SVGNodeLink.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  linkTo: PropTypes.shape({}), // eslint-disable-line
  dimensions: PropTypes.shape({}).isRequired,
}


export default SVGNodeLink
