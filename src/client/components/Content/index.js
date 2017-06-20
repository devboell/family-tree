import React from 'react'
import { Route } from 'react-router-dom'
import Home from 'components/Home'
import Gallery from 'components/Gallery'
import PaintingViewer from 'components/PaintingViewer'
import Article from './Article'

const Content = () =>
  <Article>
    <Route exact path="/" component={Home} />
    <Route exact path="/:artistPath" component={Gallery} />
    <Route path="/:artistPath/:paintingName" component={PaintingViewer} />
  </Article>

export default Content
