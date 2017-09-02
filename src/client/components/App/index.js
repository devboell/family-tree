import React from 'react'
import { Route } from 'react-router-dom'

import FamilyTreePage from 'components/FamilyTreePage'
import EditorPage from 'components/EditorPage'
import Header from 'components/Header'

const App = () => (
  <div>
    <Header />
    <Route exact path="/" component={FamilyTreePage} />
    <Route exact path="/editor" component={EditorPage} />
  </div>
)

export default App
