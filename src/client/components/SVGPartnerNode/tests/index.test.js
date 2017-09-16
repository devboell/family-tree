import React from 'react'
import SVGPartnerNode from '../index'

const withoutChildrenNode = {
  value: 'John',
  level: 2,
  children: [],
}

const withChildrenNode = {
  value: 'John',
  level: 2,
  children: [
    {
      value: 'William',
      level: 3,
      partners: [],
    },
  ],
}


let props = {
  node: withoutChildrenNode,
  y: 100,
  offsetX: 100,
  previousSubTreeWidth: 200,
  dimensions: {
    boxWidth: 80,
    boxHeight: 80,
    marginX: 50,
  },
}

it('SVGPartnerNode without children, renders component', () => {
  const wrapper = shallow(<SVGPartnerNode {...props} />)
  expect(wrapper).toMatchSnapshot()
})

it('SVGPartnerNode with children, renders component', () => {
  props = {
    ...props,
    node: withChildrenNode,
  }
  const wrapper = shallow(<SVGPartnerNode {...props} />)
  expect(wrapper).toMatchSnapshot()
})
