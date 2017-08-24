import React from 'react'
import SVGNode from '../index'

const node = {
  level: 0,
  partners: [
    {
      children: [
        {
          level: 1,
          partners: [],
          totalHeight: 100,
          totalWidth: 100,
          value: 'child 1 - level 1',
        },
        {
          level: 1,
          partners: [],
          totalHeight: 100,
          totalWidth: 100,
          value: 'child 2 - level 1',
        },
      ],
      level: 0,
      totalHeight: 200,
      totalWidth: 200,
      value: 'root - partner 1',
    },
    {
      children: [],
      level: 0,
      totalHeight: 100,
      totalWidth: 200,
      value: 'root - partner 2',
    },
  ],
  totalHeight: 200,
  totalWidth: 400,
  value: 'root',
}

const props = {
  node,
  offsetX: 200,
  linkTo: null,
  dimensions: {
    boxWidth: 100,
    boxHeight: 100,
    marginX: 50,
    marginY: 50,
  },
}

it('SVGNode, renders component', () => {
  const wrapper = shallow(<SVGNode {...props} />)
  expect(wrapper).toMatchSnapshot()
})
