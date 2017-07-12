import React from 'react'
import 'jest-styled-components'

import CheckboxWrapper from '../CheckboxWrapper'

it('CheckboxWrapper, styled component snapshot', () => {
  const wrapper = shallow(<CheckboxWrapper />)
  expect(wrapper).toMatchStyledComponentsSnapshot()
})
