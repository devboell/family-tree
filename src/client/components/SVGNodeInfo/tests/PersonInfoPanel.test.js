import React from 'react'
import 'jest-styled-components'

import PersonInfoPanel from '../PersonInfoPanel'

const props = {
  width: 100,
  height: 100,
}

it('PersonInfoPanel, styled component snapshot', () => {
  const wrapper = shallow(<PersonInfoPanel {...props} />)
  expect(wrapper).toMatchStyledComponentsSnapshot()
})
