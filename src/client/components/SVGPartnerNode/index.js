import React from 'react'
import PropTypes from 'prop-types'
import SVGNode from 'components/SVGNode'
import SVGNodeInfo from 'components/SVGNodeInfo'
import SVGPartnerLink from 'components/SVGPartnerLink'

export const cumulatedSubTreeWidths = node =>
  node.children.reduce((acc, cur) =>
    [...acc, acc[acc.length - 1] + cur.totalWidth]
  , [0])

const SVGPartnerNode = ({
  node,
  y,
  offsetX,
  previousSubTreeWidth,
  dimensions,
}) => {
  const { boxWidth, boxHeight, marginX } = dimensions
  const x = offsetX + (node.totalWidth / 2) + marginX

  return (
    <g>
      <SVGNodeInfo
        {...{ x, y, boxWidth, boxHeight }}
        info={node.value}
      />
      <SVGPartnerLink
        originX={x}
        originY={y + (boxHeight / 2)}
        {...{ dimensions, previousSubTreeWidth, offsetX }}
      />
      {node.children.map((child, i) =>
        <SVGNode
          key={`node-child-${child.value}`}
          node={child}
          offsetX={offsetX + cumulatedSubTreeWidths(node)[i]}
          linkTo={{ x: x - (marginX / 2), y: y + (boxHeight / 2) }}
          {...{ dimensions }}
        />,
      )}
    </g>
  )
}
SVGPartnerNode.propTypes = {
  node: PropTypes.shape({}).isRequired,
  y: PropTypes.number.isRequired,
  offsetX: PropTypes.number.isRequired,
  previousSubTreeWidth: PropTypes.number.isRequired,
  dimensions: PropTypes.shape({}).isRequired,
}


export default SVGPartnerNode
