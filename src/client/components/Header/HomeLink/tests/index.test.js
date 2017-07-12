import React from 'react'
import HomeLink from '../index'

it('HomeLink component, snapshot', () => {
  const wrapper = shallow(<HomeLink />)
  expect(wrapper).toMatchSnapshot()
})
