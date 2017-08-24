import React from 'react'
import SVGNodeInfo from '../index'

const props = {
  x: 200,
  y: 300,
  boxWidth: 80,
  boxHeight: 80,
  info: 'John',
}


it('SVGNodeInfo, renders component', () => {
  const wrapper = shallow(<SVGNodeInfo {...props} />)
  expect(wrapper).toMatchSnapshot()
})
