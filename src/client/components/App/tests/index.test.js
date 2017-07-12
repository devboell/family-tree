import React from 'react'

import App from '../index'


it('App component, snapshot', () => {
  const wrapper = shallow(<App />)
  expect(wrapper).toMatchSnapshot()
})
