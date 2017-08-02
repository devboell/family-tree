import React from 'react'
import PropTypes from 'prop-types'
import SVGNodeInfo from 'components/SVGNodeInfo'
import SVGNodeLink from 'components/SVGNodeLink'
import SVGPartnerNode from 'components/SVGPartnerNode'

export const hasPartner = node => node.partners.length
export const firstPartner = node => node.partners[0]
export const cumulatedSubTreeWidths = node =>
  node.partners.reduce((acc, cur) =>
    [...acc, acc[acc.length - 1] + cur.totalWidth]
  , [0])


const SVGNode = ({ node, offsetX, linkTo, dimensions }) => {
  const { boxWidth, boxHeight, marginX, marginY } = dimensions
  const x = hasPartner(node)
    ? offsetX + ((firstPartner(node).totalWidth / 2) - boxWidth)
    : offsetX + marginX
  const y = node.level * (boxHeight + marginY)

  return (
    <g style={{ shapeRendering: 'crispEdges' }} stroke="black" strokeWidth="1" fill="none">
      <SVGNodeInfo
        {...{ x, y, boxWidth, boxHeight }}
        info={node.value}
      />
      <SVGNodeLink
        {...{ x, y, dimensions, linkTo }}

      />
      {hasPartner(node)
        ? node.partners.map((partner, i) => (
          <SVGPartnerNode
            key={`partner-${partner.value}`}
            node={partner}
            offsetX={offsetX + cumulatedSubTreeWidths(node)[i]}
            previousSubTreeWidth={(i > 0 && node.partners[i - 1].totalWidth) || 0}
            {...{ y, dimensions }}
          />
        ))
        : null
      }
    </g>
  )
}

SVGNode.propTypes = {
  node: PropTypes.shape({}).isRequired,
  offsetX: PropTypes.number.isRequired,
  dimensions: PropTypes.shape({}).isRequired,
  linkTo: PropTypes.shape({}), // eslint-disable-line
}


export default SVGNode
