import React from 'react'
import artistsData from 'data/test/artists.json'
import { Gallery } from '../index'

const match = {
  params: {
    artistPath: 'heroshige',
  },
}

it('Gallery component snapshot', () => {
  const wrapper = shallow(
    <Gallery {...{ match }} artists={artistsData} />,
  )
  expect(wrapper).toMatchSnapshot()
})
