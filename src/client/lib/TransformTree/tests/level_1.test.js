import {
  onePartnerOneChild,
  onePartnerTwoChildren,
  family1,
  family2,
  family3,
} from '../test_data/level_1'
import { transformTree } from '../index'

const dimensions = {
  boxWidth: 80,
  boxHeight: 80,
  marginX: 20,
  marginY: 20,
}

it('should transform onePartnerOneChild', () => {
  expect(transformTree(onePartnerOneChild, dimensions)).toMatchSnapshot()
})

it('should transform onePartnerOneChild', () => {
  expect(transformTree(onePartnerTwoChildren, dimensions)).toMatchSnapshot()
})

it('should transform family1', () => {
  expect(transformTree(family1, dimensions)).toMatchSnapshot()
})

it('should transform family2', () => {
  expect(transformTree(family2, dimensions)).toMatchSnapshot()
})

it('should transform family3', () => {
  expect(transformTree(family3, dimensions)).toMatchSnapshot()
})
