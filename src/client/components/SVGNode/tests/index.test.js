import React from 'react'
import SVGNode from '../index'

const withPartnerNode = {
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

const withoutPartnerNode = {
  level: 0,
  partners: [],
  totalHeight: 100,
  totalWidth: 100,
  value: 'root',

}
const props = {
  node: {},
  offsetX: 200,
  linkTo: null,
  dimensions: {
    boxWidth: 100,
    boxHeight: 100,
    marginX: 50,
    marginY: 50,
  },
}

describe('SVGNode component', () => {
  it('SVGNode, renders node with partners', () => {
    const newProps = {
      ...props,
      node: withPartnerNode,
    }
    const wrapper = shallow(<SVGNode {...newProps} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('SVGNode, renders node without partners', () => {
    const newProps = {
      ...props,
      node: withoutPartnerNode,
    }
    const wrapper = shallow(<SVGNode {...newProps} />)
    expect(wrapper).toMatchSnapshot()
  })
})
