import React from 'react'
import App from '../index'

it('description', () => {
  const wrapper = shallow(<App />)
  expect(wrapper).toMatchSnapshot()
})
