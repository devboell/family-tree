import React from 'react'
import PropTypes from 'prop-types'
import { isEmpty } from 'lodash/fp'


import { transformTree } from 'lib/TransformTree'

import SVGTree from 'components/SVGTree'
import withFamilyTree from './enhancers'

const dimensions = {
  boxWidth: 80,
  boxHeight: 60,
  marginX: 30,
  marginY: 50,
}

export const FamilyTree = ({ familyTree, loading }) => {
  if (!loading && isEmpty(familyTree)) return <div />
  if (loading && isEmpty(familyTree)) return <div>Loading ...</div>
  return (
    <SVGTree
      treeData={transformTree(familyTree, dimensions)}
      {...{ dimensions }}
    />
  )
}

FamilyTree.propTypes = {
  familyTree: PropTypes.shape({}).isRequired,
  loading: PropTypes.bool.isRequired,
}

FamilyTree.defaultProps = {
  familyTree: {},
  loading: false,
}

export default withFamilyTree(FamilyTree)
