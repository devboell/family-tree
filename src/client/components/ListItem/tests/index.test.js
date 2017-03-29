import React from 'react'
import renderer from 'react-test-renderer'
import ListItem from '../index'

it('ListItem component snapshot', () => {
  const tree = renderer.create(<ListItem name={'testName'}/>).toJSON()
  expect(tree).toMatchSnapshot()
});
