import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { gql, graphql } from 'react-apollo'
import { uniq, compose, map as _map } from 'lodash/fp'

import GenreChooser from 'components/GenreChooser'
import GalleryView from 'components/GalleryView'

import { setSelectedGenres, selectGenre, deselectGenre } from './actions'
import Wrapper from './Wrapper'

const artistGenres =
  compose(
    uniq,
    _map('genre'),
  )

export class Gallery extends React.Component {
  componentWillReceiveProps(nextProps) {
    const { artist, onSetSelectedGenres } = this.props
    if (nextProps.artist !== artist) {
      onSetSelectedGenres(artistGenres(nextProps.artist.paintings))
    }
  }

  render() {
    const {
      artist,
      loading,
      selectedGenres,
      onSelectGenre,
      onDeselectGenre,
    } = this.props

    const genreFilter = painting => selectedGenres.includes(painting.genre)

    return (
      loading
        ? <div>loading...</div>
        :
        <Wrapper>
          <GenreChooser
            genres={artistGenres(artist.paintings)}
            {...{
              selectedGenres,
              onSelectGenre,
              onDeselectGenre,
            }}
          />
          <GalleryView
            artistPath={artist.path}
            paintings={artist.paintings.filter(genreFilter)}
          />
        </Wrapper>
    )
  }
}

Gallery.propTypes = {
  loading: PropTypes.bool.isRequired,
  artist: PropTypes.shape({
    path: PropTypes.string,
    paintings: PropTypes.array,
  }),
  selectedGenres: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSetSelectedGenres: PropTypes.func.isRequired,
  onSelectGenre: PropTypes.func.isRequired,
  onDeselectGenre: PropTypes.func.isRequired,
}

Gallery.defaultProps = {
  artist: {},
}

Gallery.displayName = 'Gallery'

export const ARTIST_BY_PATH_QUERY = gql`
  query ArtistByPathQuery($path: String) {
    artistByPath(path: $path) {
      path
      paintings {
        title
        name
        genre
      }
    }
  }
`

export const withArtist = graphql(ARTIST_BY_PATH_QUERY,
  {
    options: ({ match }) => ({ variables: { path: match.params.artistPath } }),
    props: ({ data: { artistByPath, loading } }) => ({
      artist: artistByPath,
      loading,
    }),
  })


export const mapStateToProps = state => ({
  selectedGenres: state.gallery.selectedGenres,
})

export const mapDispatchToProps = dispatch => ({
  onSetSelectedGenres: genres => dispatch(setSelectedGenres(genres)),
  onSelectGenre: genre => dispatch(selectGenre(genre)),
  onDeselectGenre: genre => dispatch(deselectGenre(genre)),
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
  withArtist,
)(Gallery)
