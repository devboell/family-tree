import React from 'react'

import artists from 'data/artists.json'
import Header from 'components/Header'
import ArtistsNav from 'components/ArtistsNav'
import Content from 'components/Content'
import Main from './Main'

const App = () =>
  <div>
    <Header />
    <Main>
      <ArtistsNav {...{ artists }} />
      <Content />
    </Main>
  </div>

export default App
