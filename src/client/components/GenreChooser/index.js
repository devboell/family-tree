import React from 'react'
import PropTypes from 'prop-types'
import Wrapper from './Wrapper'
import CheckboxWrapper from './CheckboxWrapper'
import Title from './Title'

export const genreDisplayNames = {
  landscape: 'Landscapes & Travel',
  portrait: 'Portaits',
  folk: 'Folk tales & Myths',
  city: 'City scenes',
  nature: 'Flora & Fauna',
}

const GenreChooser = ({
  genres,
  selectedGenres,
  onSelectGenre,
  onDeselectGenre,
}) =>
  <Wrapper>
    <Title>Genres:</Title>
    {genres.map(genre =>
      <CheckboxWrapper key={`genre-${genre}`}>
        <input
          type="checkbox"
          checked={selectedGenres.includes(genre)}
          id={genre}
          onChange={(
            selectedGenres.includes(genre)
            ? () => onDeselectGenre(genre)
            : () => onSelectGenre(genre)
          )}
        />
        <label htmlFor={genre}>{genreDisplayNames[genre]}</label>
      </CheckboxWrapper>,
  )}
  </Wrapper>


GenreChooser.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedGenres: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSelectGenre: PropTypes.func.isRequired,
  onDeselectGenre: PropTypes.func.isRequired,
}


export default GenreChooser
