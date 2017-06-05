import React from 'react'
import Header from '../index'

it('Header component snapshot', () => {
  const wrapper = shallow(
    <Header />,
  )
  expect(wrapper).toMatchSnapshot()
})
