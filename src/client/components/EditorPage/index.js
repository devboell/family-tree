import React from 'react'

import PersonList from 'containers/PersonList'
import Editor from 'containers/Editor'

import Wrapper from './Wrapper'

const EditorPage = () =>
  <Wrapper>
    <PersonList>
      <Editor />
    </PersonList>
  </Wrapper>

export default EditorPage
