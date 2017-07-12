import React from 'react'
import PropTypes from 'prop-types'
import { gql, graphql } from 'react-apollo'

import ArtistNavItem from 'components/ArtistNavItem'

import Wrapper from './Wrapper'
import Ul from './Ul'

export const ArtistsNav = ({ artists, loading }) => (
  loading
    ? <div>loading...</div>
    :
    <Wrapper>
      <Ul>
        {artists.map(artist =>
          <ArtistNavItem
            key={`artist-${artist.path}`}
            name={artist.name}
            path={artist.path}
          />,
        )}
      </Ul>
    </Wrapper>
)

// workaround for istanbul quirk, related to: https://github.com/facebook/jest/issues/1824
ArtistsNav.displayName = 'ArtistsNav'

ArtistsNav.propTypes = {
  loading: PropTypes.bool.isRequired,
  artists: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    path: PropTypes.string,
  })).isRequired,
}

ArtistsNav.defaultProps = {
  artists: [],
}

export const ARTISTS_QUERY = gql`
  query ArtistsQuery {
    artists {
      name
      path
    }
  }
`

export const withArtists = graphql(ARTISTS_QUERY,
  {
    props: ({ data: { artists, loading } }) => ({
      artists,
      loading,
    }),
  })


export default withArtists(ArtistsNav)
