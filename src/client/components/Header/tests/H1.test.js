import React from 'react'
import 'jest-styled-components'

import H1 from '../H1'

it('H1, styled component snapshot', () => {
  const wrapper = shallow(<H1 />)
  expect(wrapper).toMatchStyledComponentsSnapshot()
})
