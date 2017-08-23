import React from 'react'
import AvailablePartners from '../index'

const props = {
  fields: { push: jest.fn() },
  persons: [
    {
      id: 1,
      name: 'John',
    },
    {
      id: 2,
      name: 'Mary',
    },
  ],
}

it('AvailablePartners, renders without crashing', () => {
  expect(shallow(<AvailablePartners {...props} />)).toMatchSnapshot()
})

it('adds person to fields when button is clicked', () => {
  const wrapper = mount(<AvailablePartners {...props} />)
  const button1 = wrapper.find('button').at(0)
  const expected = {
    relationId: null,
    partner: {
      id: 1,
      name: 'John',
    },
    children: [],
  }
  button1.simulate('click')
  expect(props.fields.push).toHaveBeenCalledWith(expected)
})
