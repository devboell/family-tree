import React from 'react'
import PropTypes from 'prop-types'

import PaintingImage from './PaintingImage'
import PaintingWrapper from './PaintingWrapper'
import BackImage from './BackImage'
import Wrapper from './Wrapper'
import StyledLink from './StyledLink'
import backImage from './images/back.png'

const PaintingViewer = ({ match }) =>
  <Wrapper>
    <StyledLink to={`/${match.params.artistPath}`}>
      <BackImage src={`../${backImage}`} alt="" />
      <p>back to gallery</p>
    </StyledLink>
    <PaintingWrapper>
      <PaintingImage src={`/images/artists${match.url}`} alt="" />
    </PaintingWrapper>
  </Wrapper>

PaintingViewer.propTypes = {
  match: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
}

export default PaintingViewer
