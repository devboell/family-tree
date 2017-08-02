import React from 'react'
import PropTypes from 'prop-types'
import SVGNode from 'components/SVGNode'


const SVGTree = ({ treeData, dimensions }) =>
  <svg width={treeData.totalWidth + 2} height={treeData.totalHeight + 2}>
    <SVGNode
      node={treeData}
      {...{ dimensions }}
      offsetX={0}
      linkTo={null}
    />
  </svg>


SVGTree.propTypes = {
  // TODO: https://github.com/facebook/react/issues/5676
  treeData: PropTypes.shape({}).isRequired,
  dimensions: PropTypes.shape({}).isRequired,
}

export default SVGTree
