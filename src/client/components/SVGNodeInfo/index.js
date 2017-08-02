import React from 'react'
import PropTypes from 'prop-types'
import PersonInfoPanel from './PersonInfoPanel'

const SVGNodeInfo = ({
  x,
  y,
  boxWidth,
  boxHeight,
  info,
}) =>
  <foreignObject
    x={x}
    y={y}
    width={boxWidth}
    height={boxHeight}
  >
    <PersonInfoPanel
      width={boxWidth}
      height={boxHeight}
    >
      <p>{info}</p>
    </PersonInfoPanel>
  </foreignObject>

SVGNodeInfo.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  boxWidth: PropTypes.number.isRequired,
  boxHeight: PropTypes.number.isRequired,
  info: PropTypes.string.isRequired,
}


export default SVGNodeInfo
