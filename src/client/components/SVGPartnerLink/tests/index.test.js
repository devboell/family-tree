import React from 'react'
import SVGPartnerLink from '../index'

const props = {
  originX: 300,
  originY: 100,
  offsetX: 50,
  previousSubTreeWidth: 200,
  dimensions: { boxWidth: 80, marginX: 50 },
}


it('SVGPartnerLink, renders component', () => {
  const wrapper = shallow(<SVGPartnerLink {...props} />)
  expect(wrapper).toMatchSnapshot()
})
