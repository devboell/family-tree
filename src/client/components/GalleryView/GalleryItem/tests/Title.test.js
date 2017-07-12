import React from 'react'
import 'jest-styled-components'

import Title from '../Title'

it('Title, styled component snapshot', () => {
  const wrapper = shallow(<Title />)
  expect(wrapper).toMatchStyledComponentsSnapshot()
})
