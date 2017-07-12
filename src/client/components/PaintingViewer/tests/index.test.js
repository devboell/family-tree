import React from 'react'
import PaintingViewer from '../index'

const props = {
  match: {
    url: 'testUrl',
  },
}

it('PaintingViewer component snapshot', () => {
  const wrapper = shallow(
    <PaintingViewer {...props} />,
  )
  expect(wrapper).toMatchSnapshot()
})
