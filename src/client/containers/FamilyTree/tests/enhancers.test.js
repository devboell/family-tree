/* eslint-disable react/prop-types, react/no-multi-comp */
import React, { Component } from 'react'
import { print } from 'graphql'
import { MockedProvider } from 'react-apollo/test-utils'

import withData, { FAMILY_TREE_QUERY } from '../enhancers'

describe('FamilyTree enhancers', () => {
  it('FAMILY_TREE_QUERY has a known shape', () => {
    expect(print(FAMILY_TREE_QUERY)).toMatchSnapshot()
  })

  it('should skip if person is empty', () => {
    const mockedData = {}
    // const variables = { id: '1' }

    class Dummy extends Component {
      componentDidMount() {
        const { loading, familyTree } = this.props
        expect(loading).toBe(undefined)
        expect(familyTree).toBe(undefined)
      }

      render() {
        return null
      }
    }

    const DummyWithData = withData(Dummy)
    mount(
      <MockedProvider
        removeTypename
        mocks={[
          {
            request: { query: FAMILY_TREE_QUERY },
            result: { data: { familyTree: mockedData } } },
        ]}
      >
        <DummyWithData person={{}} />
      </MockedProvider>,
    )
  })

  it('should transform the query props', (done) => {
    const mockedData = {}
    // const variables = { id: '1' }

    class Dummy extends Component {
      componentDidMount() {
        const { loading, familyTree } = this.props
        expect(loading).toBe(true)
        expect(familyTree).toBe(undefined)
      }

      componentWillReceiveProps(nextProps) {
        const { loading, familyTree } = nextProps
        expect(loading).toBe(false)
        expect(familyTree).toBe(mockedData)
        done()
      }

      render() {
        return null
      }
    }

    const DummyWithData = withData(Dummy)
    mount(
      <MockedProvider
        removeTypename
        mocks={[
          {
            request: { query: FAMILY_TREE_QUERY },
            result: { data: { familyTree: mockedData } } },
        ]}
      >
        <DummyWithData person={{ id: 1 }} />
      </MockedProvider>,
    )
  })
})
