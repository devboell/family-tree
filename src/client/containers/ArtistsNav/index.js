import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { setSelectedArtistIndex } from './actions'
import ListItem from './ListItem'
import Ul from './Ul'

export const ArtistsNav = ({ artists, selectedArtistIndex, onSelect }) =>
  <Ul>
    {artists.map((artist, i) =>
      <ListItem
        key={`artist-${artist.name}`}
        name={artist.name}
        selected={i === selectedArtistIndex}
        onSelect={() => onSelect(i)}
      />,
    )}
  </Ul>

ArtistsNav.propTypes = {
  artists: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string })).isRequired,
  selectedArtistIndex: PropTypes.number.isRequired,
  onSelect: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  artists: state.artistsNav.artists,
  selectedArtistIndex: state.artistsNav.selectedArtistIndex,
})

const mapDispatchToProps = dispatch => ({
  onSelect: (index) => { dispatch(setSelectedArtistIndex(index)) },
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ArtistsNav))
