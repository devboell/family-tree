import React from 'react'

import ThumbLink from '../index'

const props = {
  artistPath: 'testPath',
  paintingName: 'testName',
}

it('ThumbLink component, snapshot', () => {
  const wrapper = shallow(<ThumbLink {...props} />)
  expect(wrapper).toMatchSnapshot()
})
