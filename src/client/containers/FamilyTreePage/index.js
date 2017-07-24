import React from 'react'
import { PropTypes } from 'prop-types'

import enhancers from './enhancers'
import SVGTree, { transformWithPartners } from '../../components/SVGTree'


const FamilyTreePage = ({
  familyTreeQuery,
  familyTreeQuery: familyTree,
}) => (
  familyTreeQuery.loading
  ? <div>loading ...</div>
  : <SVGTree treeData={transformWithPartners(familyTree.familyTree)} />
)

FamilyTreePage.propTypes = {
  familyTreeQuery: PropTypes.object.isRequired,
}

export default enhancers(FamilyTreePage)
