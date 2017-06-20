import React from 'react'
import PropTypes from 'prop-types'
import Title from './Title'
import Wrapper from './Wrapper'
import ThumbContainer from './ThumbContainer'
import ThumbLink from './ThumbLink'

const GalleryItem = ({ artistPath, painting }) =>
  <Wrapper>
    <ThumbContainer>
      <ThumbLink
        artistPath={artistPath}
        paintingName={painting.name}
      />
    </ThumbContainer>
    <Title>
      {painting.title}
    </Title>
  </Wrapper>

GalleryItem.propTypes = {
  artistPath: PropTypes.string.isRequired,
  painting: PropTypes.shape({
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
}


export default GalleryItem
