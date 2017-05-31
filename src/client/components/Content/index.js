import React from 'react'
import { Route } from 'react-router-dom'
import Introduction from 'components/Introduction'
import Gallery from 'components/Gallery'
import Article from './Article'

const Content = () =>
  <Article>
    <Route exact path="/" component={Introduction} />
    <Route path="/:artistName" component={Gallery} />
  </Article>

export default Content
