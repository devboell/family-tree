import React from 'react'
import SVGPartnerLink from '../index'

let props = {
  originX: 300,
  originY: 100,
  offsetX: 50,
  previousSubTreeWidth: 200,
  dimensions: { boxWidth: 80, marginX: 50 },
}


it('SVGPartnerLink with previousSubTreeWidth, renders component', () => {
  const wrapper = shallow(<SVGPartnerLink {...props} />)
  expect(wrapper).toMatchSnapshot()
})


it('SVGPartnerLink without previousSubTreeWidth, renders component', () => {
  props = {
    ...props,
    previousSubTreeWidth: 0,
  }
  const wrapper = shallow(<SVGPartnerLink {...props} />)
  expect(wrapper).toMatchSnapshot()
})
