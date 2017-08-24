import React from 'react'
import TextField from '../index'

const props = {
  input: {
    value: 'John',
    onChange: jest.fn(),
  },
}

it('TextField, renders component', () => {
  const wrapper = shallow(<TextField {...props} />)
  expect(wrapper).toMatchSnapshot()
})
