import React from 'react'
import 'jest-styled-components'

import Ul from '../Ul'

it('Ul, snapshot', () => {
  const wrapper = shallow(<Ul />)
  expect(wrapper).toMatchStyledComponentsSnapshot()
})
