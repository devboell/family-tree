import React from 'react'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom'
import Content from '../index'

it('List component snapshot', () => {
  const tree = renderer.create(
    <MemoryRouter>
      <Content />
    </MemoryRouter>,
  ).toJSON()
  expect(tree).toMatchSnapshot()
});
