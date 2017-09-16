import React from 'react'
import EditorPage from '../index'

it('EditorPage component, it renders without crashing', () => {
  const wrapper = shallow(<EditorPage />)
  expect(wrapper).toMatchSnapshot()
})
