import React from 'react'
import renderer from 'react-test-renderer'
import List from '../index'
import artists from 'data/artists.json'

it('List component snapshot', () => {
  const tree = renderer.create(<List {...{ artists }}/>).toJSON()
  expect(tree).toMatchSnapshot()
});
