import { singleRoot, withPartner, withTwoPartners } from '../test_data/level_0'
import { transformTree } from '../index'

const dimensions = {
  boxWidth: 80,
  boxHeight: 80,
  marginX: 20,
  marginY: 20,
}
it('should transform singleRoot', () => {
  expect(transformTree(singleRoot, dimensions)).toMatchSnapshot()
})

it('should transform withPartner', () => {
  expect(transformTree(withPartner, dimensions)).toMatchSnapshot()
})

it('should transform withTwoPartners', () => {
  expect(transformTree(withTwoPartners, dimensions)).toMatchSnapshot()
})
