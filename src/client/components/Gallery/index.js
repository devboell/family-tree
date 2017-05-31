import React from 'react'

const Gallery = ({ match }) =>
  <article>{match.params.artistName}</article>

export default Gallery
