import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import ArtistsNav from 'components/ArtistsNav'
import Header from 'components/Header'
import Content from 'components/Content'

import Main from './Main'

const App = ({ artists }) =>
  <div>
    <Header />
    <Main>
      <ArtistsNav {...{ artists }} />
      <Content />
    </Main>
  </div>


App.propTypes = {
  artists: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string })).isRequired,
}

const mapStateToProps = state => ({
  artists: state.app.artists,
})


export default withRouter(connect(mapStateToProps)(App))
