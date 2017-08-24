import React from 'react'
import SVGPartnerTree from '../index'

const props = {
  treeData: {
    totalWidth: 500,
    totalHeight: 500,
  },
  dimensions: {},
}

it('SVGPartnerTree, renders component', () => {
  const wrapper = shallow(<SVGPartnerTree {...props} />)
  expect(wrapper).toMatchSnapshot()
})
