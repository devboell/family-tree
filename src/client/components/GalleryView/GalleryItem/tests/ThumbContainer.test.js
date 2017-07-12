import React from 'react'
import 'jest-styled-components'

import ThumbContainer from '../ThumbContainer'

it('ThumbContainer, styled component snapshot', () => {
  const wrapper = shallow(<ThumbContainer />)
  expect(wrapper).toMatchStyledComponentsSnapshot()
})
