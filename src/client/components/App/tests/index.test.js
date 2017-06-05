import React from 'react'
import App from '../index'


it('App component snapshot, enzyme', () => {
  const wrapper = shallow(
    <App />,
  )
  expect(wrapper).toMatchSnapshot()
})
