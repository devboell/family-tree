import React from 'react'
import Header from '../index'

it('Header component, it renders without crashing', () => {
  expect(shallow(<Header />)).toMatchSnapshot()
})
