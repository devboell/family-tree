import React from 'react'
import Header from '../index'

it('renders Header component', () => {
  expect(shallow(<Header />)).toMatchSnapshot()
})
