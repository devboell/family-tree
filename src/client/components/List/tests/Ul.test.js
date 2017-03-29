import React from 'react'
import renderer from 'react-test-renderer'
import Ul from '../Ul'

it('Ul component snapshot', () => {
  const tree = renderer.create(<Ul/>).toJSON()
  expect(tree).toMatchSnapshot()
});
