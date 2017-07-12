import React from 'react'
import { print } from 'graphql'
import { MockedProvider } from 'react-apollo/lib/test-utils'

import artistsData from 'data/test/artistsQuery.json'

import ArtistsNavWithData, {
  ArtistsNav,
  ARTISTS_QUERY,
  withArtists,
 } from '../index'


describe('ArtistsNav component', () => {
  it('with data snapshot', () => {
    const wrapper = shallow(
      <ArtistsNav artists={artistsData} loading={false} />,
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('without data snapshot', () => {
    const wrapper = shallow(
      <ArtistsNav artists={[]} loading />,
    )
    expect(wrapper).toMatchSnapshot()
  })
})

describe('ArtistsNav ARTISTS_QUERY', () => {
  it('has a known query shape', () => {
    expect(print(ARTISTS_QUERY)).toMatchSnapshot()
  })
})

/* eslint-disable react/prop-types */
describe('ArtistsNav withArtists', () => {
  it('renders with loading first', () => {
    class Container extends React.Component {
      componentWillMount() {
        expect(this.props.loading).toBe(true)
        expect(this.props.artists).toBeFalsy()
      }
      render() {
        return null
      }
    }
    const ContainerWithData = withArtists(Container)
    render(
      <MockedProvider
        mocks={[
          { request: { ARTISTS_QUERY }, result: { data: artistsData } },
        ]}
      >
        <ContainerWithData />
      </MockedProvider>,
    )
  })

  /* eslint-disable react/no-multi-comp */
  it('renders data without crashing', () => {
    class Container extends React.Component {
      componentWillReceiveProps(nextProps) {
        expect(nextProps.loading).toBe(false)
        expect(nextProps.artists).toEqual(artistsData)
      }
      render() {
        return null
      }
    }
    const ContainerWithData = withArtists(Container)
    render(
      <MockedProvider
        mocks={[
          { request: { ARTISTS_QUERY }, result: { data: artistsData } },
        ]}
      >
        <ContainerWithData />
      </MockedProvider>,
    )
  })
})

describe('ArtistsNav, enhanced component', () => {
  it('renders without crashing', () => {
    const wrapper = render(
      <MockedProvider
        mocks={[
          { request: { ARTISTS_QUERY }, result: { data: artistsData } },
        ]}
      >
        <ArtistsNavWithData />
      </MockedProvider>,
    )
    expect(wrapper).toMatchSnapshot()
  })
})
