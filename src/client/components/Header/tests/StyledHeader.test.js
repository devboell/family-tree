import React from 'react'
import 'jest-styled-components'

import StyledHeader from '../StyledHeader'

it('StyledHeader, styled component snapshot', () => {
  const wrapper = shallow(<StyledHeader />)
  expect(wrapper).toMatchStyledComponentsSnapshot()
})
