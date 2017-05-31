import React from 'react'
import PropTypes from 'prop-types'
import ListItem from './ListItem'
import Ul from './Ul'

const ArtistsNav = ({ artists }) =>
  <Ul>
    {artists.map(artist =>
      <ListItem
        key={`artist-${artist.name}`}
        name={artist.name}
      />,
    )}
  </Ul>

ArtistsNav.propTypes = {
  artists: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string })).isRequired,
}

export default ArtistsNav
