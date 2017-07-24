import React from 'react'
import { PropTypes } from 'prop-types'

import SVGNode from './SVGNode'


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
  treeData: PropTypes.object.isRequired,
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
    // console.log('partner.children = ', partner.children)
    if (partner.children.length) {
      partner.children.forEach((child) => {
        // console.log('child = ', child)
        const childNode = transformWithPartners(child, node.level)
        // console.log('childNode = ', childNode)
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

/*
export const transformWithRelations = (tree, level = -1) => {
  const node = {
    value: tree.value,
    level: level + 1,
    width: nodeWidth,
    treeHeight: 0,
    relations: [],
    subTreeWidth: 0,
  }
  tree.relations.forEach((relation) => {
    const relationNode = {
      value: relation.value,
      width: boxWidth,
      children: [],
      childrenWidth: [],
      subTreeWidth: 0,
    }

    if (relation.children.length) {
      relation.children.forEach((child) => {
        const childNode = transformWithRelations(child, node.level)
        if (child.relations.length) {
          relationNode.subTreeWidth += childNode.subTreeWidth
          relationNode.childrenWidth.push(childNode.subTreeWidth)
        } else {
          relationNode.subTreeWidth += childNode.width
          relationNode.childrenWidth.push(childNode.width)
        }
        if (node.treeHeight <= childNode.treeHeight + 1) {
          node.treeHeight = childNode.treeHeight + 1
        }
        relationNode.children.push(childNode)
      })
    }
    if (relationNode.subTreeWidth < (nodeWidth * 2)) {
      relationNode.subTreeWidth = (nodeWidth * 2)
    } // min width for relations
    node.relations.push(relationNode)
    node.subTreeWidth += relationNode.subTreeWidth
  })

  return node
}
*/

export default SVGTree
