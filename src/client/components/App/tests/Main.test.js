import React from 'react'
import 'jest-styled-components'

import Main from '../Main'

it('Main, styled component snapshot', () => {
  const wrapper = shallow(<Main />)
  expect(wrapper).toMatchStyledComponentsSnapshot()
})
