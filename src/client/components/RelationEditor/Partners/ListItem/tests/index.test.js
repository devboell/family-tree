import React from 'react'
import ListItem from '../index'


const props = {
  input: {
    value: {
      partner: {
        name: 'John',
      },
      children: [
        {
          name: 'William',
        },
        {
          name: 'Mary',
        },
      ],
    },
  },
  onRemove: jest.fn(),
}

it('ListItem component, renders without crashing', () => {
  expect(shallow(<ListItem {...props} />)).toMatchSnapshot()
})
