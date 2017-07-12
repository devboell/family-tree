import React from 'react'
import 'jest-styled-components'

import P from '../P'

it('P, styled component snapshot', () => {
  const wrapper = shallow(<P />)
  expect(wrapper).toMatchStyledComponentsSnapshot()
})
