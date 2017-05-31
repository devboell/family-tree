import React from 'react'

import ListItem from './ListItem'
import Ul from './Ul'

const ArtistsNav = ({ artists }) =>
  <Ul>
    {artists.map((artist, i) =>
      <ListItem
        key={`artist-${i}`}
        name={artist.name}
      />
    )}
  </Ul>

export default ArtistsNav
