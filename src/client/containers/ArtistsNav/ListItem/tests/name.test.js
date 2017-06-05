import React from 'react'
import renderer from 'react-test-renderer'
import Name from '../Name'

it('Name component snapshot', () => {
  const tree = renderer.create(<Name />).toJSON()
  expect(tree).toMatchSnapshot()
});
