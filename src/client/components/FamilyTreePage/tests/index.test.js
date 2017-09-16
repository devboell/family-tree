import React from 'react'
import FamilyTreePage from '../index'

it('FamilyTreePage component, it renders without crashing', () => {
  const wrapper = shallow(<FamilyTreePage />)
  expect(wrapper).toMatchSnapshot()
})
