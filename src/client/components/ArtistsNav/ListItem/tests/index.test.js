import React from 'react'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom'
import ListItem from '../index'

it('ListItem component snapshot', () => {
  const tree = renderer.create(
    <MemoryRouter>
      <ListItem name={'testName'} />
    </MemoryRouter>,
  ).toJSON()
  expect(tree).toMatchSnapshot()
});
