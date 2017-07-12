import React from 'react'
import 'jest-styled-components'

import Wrapper from '../Wrapper'

it('Wrapper, snapshot', () => {
  const wrapper = shallow(<Wrapper />)
  expect(wrapper).toMatchStyledComponentsSnapshot()
})
