import React from 'react'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom'
import ListItem from '../index'

const props = {
  name: 'testName',
  selected: true,
  onSelect: () => {},
}

it('ListItem component snapshot', () => {
  const tree = renderer.create(
    <MemoryRouter>
      <ListItem {...props} />
    </MemoryRouter>,
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
