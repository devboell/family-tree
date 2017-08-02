/* eslint-disable import/prefer-default-export */
export const transformTree = (tree, dimensions, level = 0) => {
  const nodeWidth = dimensions.boxWidth + dimensions.marginX
  const nodeHeight = dimensions.boxHeight + dimensions.marginY
  const node = {
    value: tree.name,
    level,
    totalWidth: 0,
    totalHeight: 0,
    partners: [],
  }

  if (tree.partners.length) {
    tree.partners.forEach((partner) => {
      const partnerNode = {
        value: partner.partner.name,
        level,
        totalWidth: 0,
        totalHeight: 0,
        children: [],
      }
      if (partner.children.length) {
        partner.children.forEach((child) => {
          const childNode = transformTree(child, dimensions, level + 1)
          partnerNode.totalWidth += childNode.totalWidth
          if (partnerNode.totalHeight < childNode.totalHeight + nodeHeight) {
            partnerNode.totalHeight = childNode.totalHeight + nodeHeight
          }
          partnerNode.children.push(childNode)
        })
      } else {
        partnerNode.totalHeight += nodeHeight
      }
      if (partnerNode.totalWidth <= 2 * nodeWidth) {
        partnerNode.totalWidth = 2 * nodeWidth // give min width
      }
      node.totalWidth += partnerNode.totalWidth
      if (node.totalHeight < partnerNode.totalHeight) {
        node.totalHeight = partnerNode.totalHeight
      }
      node.partners.push(partnerNode)
    })
  } else {
    node.totalWidth += nodeWidth
    node.totalHeight += nodeHeight
  }

  return node
}
