import React from 'react'
import PropTypes from 'prop-types'

import Image from './Image'

const PaintingViewer = ({ match }) =>
  <Image src={`/images/artists${match.url}`} alt="" />

PaintingViewer.propTypes = {
  match: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
}

export default PaintingViewer
