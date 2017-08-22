import React from 'react'
import { EditorPage } from '../index'
import { editModes } from '../constants'

const relationsQuery = {
  loading: false,
  relations: [],
}

const personsQuery = {
  loading: false,
  persons: [],
}

const props = {
  relationsQuery,
  personsQuery,
  createPersonMutation: jest.fn(),
  updatePersonMutation: jest.fn(),
  removePersonMutation: jest.fn(),
  editMode: editModes.DISABLED,
  onSelectPerson: jest.fn(),
  onCreatePerson: jest.fn(),
  onRemovePerson: jest.fn(),
  selectedPerson: {},
}

it('EditorPage, renders the component', () => {
  const wrapper = shallow(<EditorPage {...props} />)
  expect(wrapper).toMatchSnapshot()
})
