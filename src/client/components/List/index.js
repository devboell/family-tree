import React, { PropTypes } from 'react'
import Ul from './Ul'
import ListItem from 'components/ListItem'

const List = ({ artists }) =>
  <Ul>
    {artists.map((artist, i) =>
      <ListItem
        key={`artist-${i}`}
        name={artist.name}
      />
    )}
  </Ul>

List.propTypes = {
  artists: PropTypes.array.isRequired
}


export default List
