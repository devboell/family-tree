import React from 'react'
import PropTypes from 'prop-types'

import { transformTree } from 'lib/TransformTree'

import SVGTree from 'components/SVGTree'
import withFamilyTree from './enhancers'

const dimensions = {
  boxWidth: 80,
  boxHeight: 60,
  marginX: 30,
  marginY: 50,
}

const FamilyTree = ({ familyTree, loading }) =>
  <div>
    {loading
      ? <div>Loading ...</div>
      :
      <SVGTree
        treeData={transformTree(familyTree, dimensions)}
        {...{ dimensions }}
      />
    }
  </div>

FamilyTree.propTypes = {
  familyTree: PropTypes.shape({}).isRequired,
  loading: PropTypes.bool.isRequired,
}

FamilyTree.defaultProps = {
  familyTree: {},
  loading: true,
}

export default withFamilyTree(FamilyTree)
