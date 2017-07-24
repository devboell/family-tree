import React from 'react'
import { Route } from 'react-router-dom'

import FamilyTreePage from 'containers/FamilyTreePage'
import EditorPage from 'containers/EditorPage'
import Header from 'components/Header'

const App = () => (
  <div>
    <Header />
    <Route path="/" exact component={FamilyTreePage} />
    <Route path="/editor" exact component={EditorPage} />
  </div>
)

export default App
