import React from 'react'
import 'jest-styled-components'

import Image from '../Image'

it('Image, styled component snapshot', () => {
  const wrapper = shallow(<Image />)
  expect(wrapper).toMatchStyledComponentsSnapshot()
})
