import React from 'react'
import GalleryItem from '../index'

const props = {
  artistPath: 'testPath',
  painting: {
    title: 'testTitle',
    name: 'testName.jpg',
  },
}

it('GalleryItem component, snapshot', () => {
  const wrapper = shallow(<GalleryItem {...props} />)
  expect(wrapper).toMatchSnapshot()
})
