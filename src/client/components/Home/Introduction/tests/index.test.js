import React from 'react'
import Introduction from '../index'


it('Introduction component snapshot', () => {
  const wrapper = shallow(
    <Introduction />,
  )
  expect(wrapper).toMatchSnapshot()
})
