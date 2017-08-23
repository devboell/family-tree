import React from 'react'
import Partners from '../index'


// TODO: find way to properly test redux-form
const partners = [
  'John',
  'Mary',
]

const props = {
  fields: {
    remove: jest.fn(),
    name: 'partners',
    map: iter => partners.map(iter),
  },
}

it('AvailablePartners, renders without crashing', () => {
  expect(shallow(<Partners {...props} />)).toMatchSnapshot()
})
