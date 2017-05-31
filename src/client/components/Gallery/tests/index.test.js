import React from 'react'
import renderer from 'react-test-renderer'
import Gallery from '../index'

const match = {
  params: {
    artistName: 'Heroshige'
  }
}

it('List component snapshot', () => {
  const tree = renderer.create(
      <Gallery {...{ match }}/>
  ).toJSON()
  expect(tree).toMatchSnapshot()
});
