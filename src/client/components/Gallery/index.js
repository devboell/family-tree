import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import find from 'lodash/fp/find'

import GalleryItem from './GalleryItem'
import GalleryWrapper from './GalleryWrapper'

export const Gallery = ({ match, artists }) => {
  const artist = find(['path', match.params.artistPath])(artists)

  return (
    <GalleryWrapper>
      {artist.paintings.map(painting =>
        <GalleryItem
          key={`painting-${painting.name}`}
          artistPath={artist.path}
          {...{ painting }}
        />,
      )}
    </GalleryWrapper>
  )
}

Gallery.propTypes = {
  match: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  artists: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string })).isRequired,
}

const mapStateToProps = state => ({
  artists: state.app.artists,
})

export default connect(mapStateToProps)(Gallery)
