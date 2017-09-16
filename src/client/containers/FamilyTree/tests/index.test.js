import React from 'react'
import { FamilyTree } from '../index'

describe('FamilyTree component', () => {
  it('loading TRUE familyTree EMPTY, renders without crashing', () => {
    const props = {
      loading: true,
      familyTree: {},
    }
    expect(shallow(<FamilyTree {...props} />)).toMatchSnapshot()
  })

  it('loading FALSE familyTree EMPTY, renders without crashing', () => {
    const props = {
      loading: false,
      familyTree: {},
    }
    expect(shallow(<FamilyTree {...props} />)).toMatchSnapshot()
  })

  it('loading FALSE familyTree NOT EMPTY, renders without crashing', () => {
    const props = {
      loading: false,
      familyTree: {
        id: '1',
        name: 'John',
        partners: [],
      },
    }
    expect(shallow(<FamilyTree {...props} />)).toMatchSnapshot()
  })
})
