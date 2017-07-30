import React from 'react'
import { PropTypes } from 'prop-types'

import SVGNode from 'components/SVGNode'


const boxWidth = 80
const marginX = 30
const boxHeight = 60
const marginY = 50
const nodeWidth = boxWidth + marginX
const nodeHeight = boxHeight + marginY


const SVGTree = ({ treeData }) => (
  <svg
    width={treeData.subTreeWidth + 10}
    height={((treeData.treeHeight + 1) * nodeHeight) + 10}
  >
    <SVGNode
      node={treeData}
      offsetX={0}
      linkTo={null}
      {...{ boxWidth, marginX, boxHeight, marginY }}
    />
  </svg>
)

SVGTree.propTypes = {
  // TODO: https://github.com/facebook/react/issues/5676
  treeData: PropTypes.shape({}).isRequired,
}


export const transformWithPartners = (tree, level = -1) => {
  const node = {
    value: tree.name,
    level: level + 1,
    width: nodeWidth,
    treeHeight: 0,
    partners: [],
    subTreeWidth: 0,
  }
  tree.partners.forEach((partner) => {
    const partnerNode = {
      value: partner.partner.name,
      width: boxWidth,
      children: [],
      childrenWidth: [],
      subTreeWidth: 0,
    }
    if (partner.children.length) {
      partner.children.forEach((child) => {
        const childNode = transformWithPartners(child, node.level)
        if (child.partners.length) {
          partnerNode.subTreeWidth += childNode.subTreeWidth
          partnerNode.childrenWidth.push(childNode.subTreeWidth)
        } else {
          partnerNode.subTreeWidth += childNode.width
          partnerNode.childrenWidth.push(childNode.width)
        }
        if (node.treeHeight <= childNode.treeHeight + 1) {
          node.treeHeight = childNode.treeHeight + 1
        }
        partnerNode.children.push(childNode)
      })
    }
    if (partnerNode.subTreeWidth < (nodeWidth * 2)) {
      partnerNode.subTreeWidth = (nodeWidth * 2)
    } // min width for partners
    node.partners.push(partnerNode)
    node.subTreeWidth += partnerNode.subTreeWidth
  })

  return node
}


export default SVGTree
