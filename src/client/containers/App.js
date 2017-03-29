import React from 'react'

import artists from 'data/artists.json'
import List from 'components/List'

const App = () =>
  <List {...{ artists }} />

export default App
