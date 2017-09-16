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

it('AvailablePartners component, renders without crashing', () => {
  expect(shallow(<Partners {...props} />)).toMatchSnapshot()
})

it('onRemove/remove is called with correct index', () => {
  const wrapper = shallow(<Partners {...props} />)
  const index = 1
  const onRemove = wrapper.find('Field').at(index).props().onRemove
  onRemove()
  expect(props.fields.remove).toHaveBeenCalledWith(index)
})
