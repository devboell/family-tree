import React from 'react'
import PersonList from '../index'
import Button from '../Button'

const props = {
  persons: [
    {
      name: 'John',
    },
    {
      name: 'Mary',
    },
  ],
  onSelectPerson: jest.fn(),
}

it('PersonList component', () => {
  expect(shallow(<PersonList {...props} />)).toMatchSnapshot()
})

it('PersonList button click', () => {
  const wrapper = shallow(<PersonList {...props} />)
  wrapper.find(Button).at(0).simulate('click')
  expect(props.onSelectPerson).toHaveBeenCalled()
})
