import React from 'react'
import Gallery from '../index'

const match = {
  params: {
    artistName: 'Heroshige',
  },
}

it('Gallery component snapshot', () => {
  const wrapper = shallow(
    <Gallery {...{ match }} />,
  )
  expect(wrapper).toMatchSnapshot()
})
