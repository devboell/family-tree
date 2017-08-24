import React from 'react'
import SVGPartnerNode from '../index'

const props = {
  node: {
    value: 'John',
    level: 2,
    children: [],
  },
  y: 100,
  offsetX: 100,
  previousSubTreeWidth: 200,
  dimensions: {
    boxWidth: 80,
    boxHeight: 80,
    marginX: 50,
  },
}

it('SVGPartnerNode, renders component', () => {
  const wrapper = shallow(<SVGPartnerNode {...props} />)
  expect(wrapper).toMatchSnapshot()
})
