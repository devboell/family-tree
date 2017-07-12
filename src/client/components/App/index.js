import React from 'react'

import ArtistsNav from 'containers/ArtistsNav'
import Header from 'components/Header'
import Content from 'components/Content'

import Main from './Main'

const App = () => (
  <div>
    <Header />
    <Main>
      <ArtistsNav />
      <Content />
    </Main>
  </div>
)

export default App
