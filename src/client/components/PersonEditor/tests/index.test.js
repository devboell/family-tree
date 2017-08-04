import React from 'react'
import PersonEditorForm, { PersonEditor } from '../index'


it('renders PersonEditor react-form', () => {
  const props = {
    onSubmit: jest.fn(),
    initialValues: {
      name: 'John',
      title: '',
    },
  }

  expect(shallow(<PersonEditorForm {...props} />)).toMatchSnapshot()
})

describe('PersonEditor component', () => {
  const props = {
    disabled: true,
    handleSubmit: jest.fn(),
    persons: [],
    relations: [
      {
        person1: { name: 'John' },
        person2: { name: 'Mary' },
      },
    ],
  }

  it('disabled = true', () => {
    expect(shallow(<PersonEditor {...props} />)).toMatchSnapshot()
  })

  it('disabled = false', () => {
    const newProps = { ...props, disabled: false }
    expect(shallow(<PersonEditor {...newProps} />)).toMatchSnapshot()
  })
})
