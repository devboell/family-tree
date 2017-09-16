import React from 'react'

import PersonList from 'containers/PersonList'
import FamilyTree from 'containers/FamilyTree'

import Wrapper from './Wrapper'

const FamilyTreePage = () =>
  <Wrapper>
    <PersonList>
      <FamilyTree />
    </PersonList>
  </Wrapper>

export default FamilyTreePage
