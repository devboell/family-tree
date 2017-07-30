import React from 'react'
import { PropTypes } from 'prop-types'

import SVGRelation from 'components/SVGRelation'
import SVGRelationLink from 'components/SVGRelationLink'

import PersonInfoPanel from 'components/PersonInfoPanel'


const SVGNode = ({
  node,
  offsetX,
  linkTo,
  boxWidth,
  marginX,
  boxHeight,
  marginY,
}) => {
  // if a  node has relation(s), it is placed to the left of the center
  // of the subtree of the first relation.
  const subTreeWidths = node.partners.map(relation => relation.subTreeWidth)
  const x = subTreeWidths.length
    ? offsetX + ((subTreeWidths[0] / 2) - boxWidth)
    : offsetX + marginX


  const y = node.level * (boxHeight + marginY)
  const midPointOffset = arr =>
    // eslint-disable-next-line no-confusing-arrow
    arr.reduce((acc, val, i) =>
    i === arr.length - 1
      ? acc + (val / 2)
      : acc + val
    , 0)


  const midPoint = i => midPointOffset(subTreeWidths.slice(0, i + 1))
  const prevMidPoint = i => midPointOffset(subTreeWidths.slice(0, i))

  const target = i => (
    i > 0
    ? offsetX + prevMidPoint(i) + marginX + boxWidth
    : (offsetX + (subTreeWidths[0] / 2))
  )

  const prevRelOffset = i => node.partners.slice(0, i)
    .reduce((acc, rel) => acc + rel.subTreeWidth, 0)

  return (
    <g style={{ shapeRendering: 'crispEdges' }} stroke="black" strokeWidth="1" fill="none">
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
          <p>{node.value}</p>
        </PersonInfoPanel>
      </foreignObject>
      {(linkTo)
        ? <path d={`M ${x + (boxWidth / 2)} ${y} V ${y - (marginY / 2)} H ${linkTo.x} V ${linkTo.y}`} />
        : null
      }
      {node.partners.map((relation, i) => (
        <g key={`relation-${relation.value}`}>
          <SVGRelationLink
            originX={offsetX + midPoint(i) + marginX}
            originY={y + (boxHeight / 2)}
            targetX={target(i) + 2}
          />
          <SVGRelation
            relationNode={relation}
            {...{ y }}
            offsetX={offsetX + prevRelOffset(i)}
            {...{ boxWidth, marginX, boxHeight, marginY }}
          />
        </g>
      ))}
    </g>
  )
}

SVGNode.propTypes = {
  node: PropTypes.object.isRequired,
  offsetX: PropTypes.number.isRequired,
  linkTo: PropTypes.object,
  boxWidth: PropTypes.number.isRequired,
  marginX: PropTypes.number.isRequired,
  boxHeight: PropTypes.number.isRequired,
  marginY: PropTypes.number.isRequired,
}


export default SVGNode
