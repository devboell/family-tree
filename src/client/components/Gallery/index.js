import React from 'react'
import PropTypes from 'prop-types'

const Gallery = ({ match }) =>
  <article>{match.params.artistName}</article>

Gallery.propTypes = {
  match: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
}
export default Gallery
