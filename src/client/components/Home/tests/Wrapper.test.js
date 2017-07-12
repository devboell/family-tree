import React from 'react'
import 'jest-styled-components'

import Wrapper from '../Wrapper'

it('Wrapper, styled component snapshot', () => {
  const wrapper = shallow(<Wrapper />)
  expect(wrapper).toMatchStyledComponentsSnapshot()
})
