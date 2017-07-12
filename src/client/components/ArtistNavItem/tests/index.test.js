import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import ArtistNavItem from '../index'
import { activeClassName } from '../StyledNavLink'

describe('ArtistNavItem component', () => {
  const testPath = 'testPath'
  const props = {
    name: 'testName',
    path: testPath,
  }

  it('snapshot, shallow', () => {
    const wrapper = shallow(
      <ArtistNavItem {...props} />,
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('NavLink <a> has activeClassName', () => {
    const wrapper = render(
      <MemoryRouter initialEntries={[`/${testPath}`]}>
        <ArtistNavItem {...props} />
      </MemoryRouter>,
    )
    expect(wrapper.find('a').hasClass(activeClassName)).toBe(true)
  })

  it('NavLink <a> has NO activeClassName', () => {
    const wrapper = render(
      <MemoryRouter>
        <ArtistNavItem {...props} />
      </MemoryRouter>,
    )
    expect(wrapper.find('a').hasClass(activeClassName)).toBe(false)
  })
})
