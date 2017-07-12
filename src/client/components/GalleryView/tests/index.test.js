import React from 'react'
import GalleryView from '../index'


const props = {
  artistPath: 'testPath',
  paintings: [
    {
      title: 'painting1',
      name: 'painting1.jpg',
    },
    {
      title: 'painting2',
      name: 'painting2.jpg',
    },
  ],
}

it('GalleryView component snapshot', () => {
  const wrapper = shallow(<GalleryView {...props} />)
  expect(wrapper).toMatchSnapshot()
})
