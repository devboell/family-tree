import React from 'react'
import SVGTree, { transformWithPartners } from '../index'


describe('SVGTree', () => {
  describe('transformWithPartners', () => {
    it('transforms root node tree', () => {
      const tree = {
        name: 'John',
        partners: [],
      }
      expect(transformWithPartners(tree)).toMatchSnapshot()
    })

    it('transforms root node with partner tree', () => {
      const tree = {
        name: 'John',
        partners: [
          {
            partner: {
              name: 'Mary',
            },
            children: [],
          },
        ],
      }
      expect(transformWithPartners(tree)).toMatchSnapshot()
    })

    it('transforms root node with partner and children', () => {
      const tree = {
        name: 'John',
        partners: [
          {
            partner: {
              name: 'Mary',
            },
            children: [
              {
                name: 'Tom',
                partners: [],
              },
              {
                name: 'Dick',
                partners: [],
              },
              {
                name: 'Harry',
                partners: [],
              },
            ],
          },
        ],
      }
      expect(transformWithPartners(tree)).toMatchSnapshot()
    })
  })
  describe('component', () => {
    it('renders a tree', () => {
      const tree = {
        name: 'John',
        partners: [
          {
            partner: {
              name: 'Mary',
            },
            children: [
              {
                name: 'Tom',
                partners: [],
              },
              {
                name: 'Dick',
                partners: [],
              },
              {
                name: 'Harry',
                partners: [],
              },
            ],
          },
        ],
      }
      const treeData = transformWithPartners(tree)
      const wrapper = mount(<SVGTree {...{ treeData }} />)
      expect(wrapper).toMatchSnapshot()
    })
  })
})
