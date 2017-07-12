import React from 'react'
import 'jest-styled-components'

import Article from '../Article'

it('Article, styled component snapshot', () => {
  const wrapper = shallow(<Article />)
  expect(wrapper).toMatchStyledComponentsSnapshot()
})
