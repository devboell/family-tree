import React from 'react'
import SVGNodeLink from '../index'

let props = {
  x: 100,
  y: 150,
  linkTo: {
    x: 200,
    y: 100,
  },
  dimensions: {
    boxWidth: 80,
    marginY: 50,
  },
}


it('SVGNodeLink with linkTo, renders component', () => {
  const wrapper = shallow(<SVGNodeLink {...props} />)
  expect(wrapper).toMatchSnapshot()
})

it('SVGNodeLink with linkTo, renders component', () => {
  props = {
    ...props,
    linkTo: {},
  }
  const wrapper = shallow(<SVGNodeLink {...props} />)
  expect(wrapper).toMatchSnapshot()
})
