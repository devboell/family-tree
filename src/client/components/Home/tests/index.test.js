import React from 'react'
import Home from '../index'

it('Home component snapshot', () => {
  const wrapper = shallow(
    <Home />,
  )
  expect(wrapper).toMatchSnapshot()
})
