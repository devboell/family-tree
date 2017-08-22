import React from 'react'
import RelationEditor from '../index'

it('Relations, renders without crashing', () => {
  const props = {
    fields: {},
    persons: [],
  }
  expect(shallow(<RelationEditor {...props} />)).toMatchSnapshot()
})
