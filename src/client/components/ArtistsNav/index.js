import React from 'react'
import PropTypes from 'prop-types'

import ListItem from './ListItem'
import Wrapper from './Wrapper'
import Ul from './Ul'

export const ArtistsNav = ({ artists }) =>
  <Wrapper>
    <Ul>
      {artists.map(artist =>
        <ListItem
          key={`artist-${artist.path}`}
          name={artist.name}
          path={artist.path}
        />,
      )}
    </Ul>
  </Wrapper>

ArtistsNav.propTypes = {
  artists: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string })).isRequired,
}

export default ArtistsNav
