import React from 'react'
import { MemoryRouter, withRouter } from 'react-router-dom'
import { MockedProvider } from 'react-apollo/lib/test-utils'
import configureStore from 'redux-mock-store'
import { print } from 'graphql'

import artistData from 'data/test/artistByPathQuery.json'
import * as actions from '../actions'

import GalleryWithData, {
  Gallery,
  ARTIST_BY_PATH_QUERY,
  withArtist,
  mapDispatchToProps,
} from '../index'


const middlewares = []
const mockStore = configureStore(middlewares)

describe('Gallery component', () => {
  const onSetSelectedGenresSpy = jest.fn()
  const otherProps = {
    selectedGenres: ['city', 'landscape'],
    onSetSelectedGenres: onSetSelectedGenresSpy,
    onSelectGenre: jest.fn(),
    onDeselectGenre: jest.fn(),
  }

  beforeEach(() => {
    onSetSelectedGenresSpy.mockClear()
  })

  it('with data snapshot', () => {
    const wrapper = shallow(
      <Gallery
        artist={artistData}
        loading={false}
        {...otherProps}
      />,
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('without data snapshot', () => {
    const wrapper = shallow(
      <Gallery
        artist={{}}
        loading
        {...otherProps}
      />,
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('calls onSetSelectedGenres for new aritst prop', () => {
    const wrapper = shallow(
      <Gallery
        artist={{}}
        loading
        {...otherProps}
      />,
    )
    wrapper.setProps({ artist: artistData })
    expect(onSetSelectedGenresSpy).toHaveBeenCalledTimes(1)
  })

  it('does not call onSetSelectedGenres for same aritst prop', () => {
    const wrapper = shallow(
      <Gallery
        artist={artistData}
        loading={false}
        {...otherProps}
      />,
    )
    wrapper.setProps({ artist: artistData })
    expect(onSetSelectedGenresSpy).toHaveBeenCalledTimes(0)
  })
})

describe('Gallery ARTIST_BY_PATH_QUERY', () => {
  it('has a known query shape', () => {
    expect(print(ARTIST_BY_PATH_QUERY)).toMatchSnapshot()
  })
})


/* eslint-disable react/prop-types */
describe('Gallery withArtist', () => {
  it('renders with loading first', () => {
    class Container extends React.Component {
      componentWillMount() {
        expect(this.props.loading).toBe(true)
        expect(this.props.artist).toBeFalsy()
      }
      render() {
        return null
      }
    }
    const ContainerWithData = withRouter(withArtist(Container))
    render(
      <MockedProvider
        mocks={[
          {
            request: { ARTIST_BY_PATH_QUERY },
            result: { data: artistData } },
        ]}
      >
        <MemoryRouter initialEntries={['/heroshige']}>
          <ContainerWithData />
        </MemoryRouter>
      </MockedProvider>,
    )
  })

  /* eslint-disable react/no-multi-comp */
  it('renders data without crashing', () => {
    class Container extends React.Component {
      componentWillReceiveProps(nextProps) {
        expect(nextProps.loading).toBe(false)
        expect(nextProps.artists).toEqual(artistData)
      }
      render() {
        return null
      }
    }
    const ContainerWithData = withRouter(withArtist(Container))
    render(
      <MockedProvider
        mocks={[
          {
            request: { ARTIST_BY_PATH_QUERY },
            result: { data: artistData } },
        ]}
      >
        <MemoryRouter initialEntries={['/heroshige']}>
          <ContainerWithData />
        </MemoryRouter>
      </MockedProvider>,
    )
  })
})

describe('Gallery, enhanced component', () => {
  it('renders without crashing', () => {
    const wrapper = render(
      <MockedProvider
        mocks={[
          { request: { ARTIST_BY_PATH_QUERY }, result: { data: artistData } },
        ]}
        store={mockStore({ gallery: { selectedGenres: [] } })}
      >
        <MemoryRouter initialEntries={['/heroshige']}>
          <GalleryWithData />
        </MemoryRouter>
      </MockedProvider>,
    )
    expect(wrapper).toMatchSnapshot()
  })
})

describe('mapDispatchToProps', () => {
  const dispatch = jest.fn()
  const {
    onSetSelectedGenres,
    onSelectGenre,
    onDeselectGenre,
  } = mapDispatchToProps(dispatch)

  it('maps onSetSelectedGenres to setSelectedGenres', () => {
    const genres = ['city', 'landscape']
    const expected = actions.setSelectedGenres(genres)
    onSetSelectedGenres(genres)
    expect(dispatch).toHaveBeenCalledWith(expected)
  })

  it('maps onSelectGenre to selectGenre', () => {
    const genre = 'city'
    const expected = actions.selectGenre(genre)
    onSelectGenre(genre)
    expect(dispatch).toHaveBeenCalledWith(expected)
  })

  it('maps onDeselectGenre to deselectGenre', () => {
    const genre = 'city'
    const expected = actions.deselectGenre(genre)
    onDeselectGenre(genre)
    expect(dispatch).toHaveBeenCalledWith(expected)
  })
})
