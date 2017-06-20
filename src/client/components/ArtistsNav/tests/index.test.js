import React from 'react'
import artistsData from 'data/test/artists.json'

import { ArtistsNav } from '../index'


it('ArtistsNav component snapshot', () => {
  const wrapper = shallow(
    <ArtistsNav artists={artistsData} />,
  )
  expect(wrapper).toMatchSnapshot()
})
