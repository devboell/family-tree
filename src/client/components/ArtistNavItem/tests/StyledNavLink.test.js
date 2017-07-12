import React from 'react'
import 'jest-styled-components'

import StyledNavLink from '../StyledNavLink'

it('StyledNavLink, snapshot', () => {
  const wrapper = shallow(<StyledNavLink to="/testPath" />)
  expect(wrapper).toMatchStyledComponentsSnapshot()
})
