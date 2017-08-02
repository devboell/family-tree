import React from 'react'
import { PropTypes } from 'prop-types'
import SVGTree from 'components/SVGTree'
import { transformTree } from 'lib/TransformTree'
import enhancers from './enhancers'

const dimensions = {
  boxWidth: 80,
  boxHeight: 60,
  marginX: 30,
  marginY: 50,
}

const FamilyTreePage = ({
  familyTreeQuery,
  familyTreeQuery: familyTree,
}) => (
  familyTreeQuery.loading
  ? <div>loading ...</div>
  :
  <SVGTree
    treeData={transformTree(familyTree.familyTree, dimensions)}
    {...{ dimensions }}
  />
)

FamilyTreePage.propTypes = {
  familyTreeQuery: PropTypes.shape({}).isRequired,
}

export default enhancers(FamilyTreePage)
