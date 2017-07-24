import React from 'react'
import { PropTypes } from 'prop-types'

import SVGNode from './SVGNode'
import PersonInfoPanel from './PersonInfoPanel'

const SVGRelation = ({
  relationNode,
  y,
  offsetX,
  boxWidth,
  marginX,
  boxHeight,
  marginY,
}) => {
  const x = offsetX + (relationNode.subTreeWidth / 2) + marginX

  return (
    <g>
      <foreignObject
        {...{ x }}
        {...{ y }}
        width={boxWidth}
        height={boxHeight}
      >
        <PersonInfoPanel
          width={boxWidth}
          height={boxHeight}
        >
          <p>{relationNode.value}</p>
        </PersonInfoPanel>
      </foreignObject>

      {relationNode.children.map((child, j) => {
        const subTreeOffset = relationNode.childrenWidth.slice(0, j).reduce((acc, w) => acc + w, 0)
        const childOffsetX = offsetX + subTreeOffset
        return (
          <SVGNode
            key={`node-child-${child.value}`}
            node={child}
            offsetX={childOffsetX}
            linkTo={{ x: x - (marginX / 2), y: y + (boxHeight / 2) }}
            {...{ boxWidth, marginX, boxHeight, marginY }}
          />
        )
      })
      }
    </g>
  )
}

SVGRelation.propTypes = {
  relationNode: PropTypes.object.isRequired,
  y: PropTypes.number.isRequired,
  offsetX: PropTypes.number.isRequired,
  boxWidth: PropTypes.number.isRequired,
  marginX: PropTypes.number.isRequired,
  boxHeight: PropTypes.number.isRequired,
  marginY: PropTypes.number.isRequired,
}


export default SVGRelation
