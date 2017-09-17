import 'jest-styled-components'
import React from 'react'

import Button from '../Button'


describe('Button component', () => {
  it('renders when selected', () => {
    expect(shallow(<Button isSelected />)).toMatchSnapshot()
  })

  it('renders when not selected', () => {
    expect(shallow(<Button isSelected={false} />)).toMatchSnapshot()
  })
})
