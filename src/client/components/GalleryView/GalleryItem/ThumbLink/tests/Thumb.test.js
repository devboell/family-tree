import React from 'react'
import 'jest-styled-components'

import Thumb from '../Thumb'

it('Thumb, styled component snapshot', () => {
  const wrapper = shallow(<Thumb />)
  expect(wrapper).toMatchStyledComponentsSnapshot()
})
