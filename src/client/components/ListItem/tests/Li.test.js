import React from 'react'
import renderer from 'react-test-renderer'
import Li from '../Li'

it('Li component snapshot', () => {
  const tree = renderer.create(<Li/>).toJSON()
  expect(tree).toMatchSnapshot()
});
