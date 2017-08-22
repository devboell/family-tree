import React from 'react'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { EditorPage, mapDispatchToProps } from '../index'
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

it('EditorPage, renders the component, CREATE mode', () => {
  const newProps = { ...props, editMode: editModes.CREATE }
  const wrapper = shallow(<EditorPage {...newProps} />)
  expect(wrapper).toMatchSnapshot()
})

describe('mapDispatchToProps', () => {
  const middlewares = [thunk]
  const mockStore = configureMockStore(middlewares)
  let store

  beforeEach(() => {
    store = mockStore({})
  })

  it('maps onSelectPerson to selectPerson', () => {
    const expectedActions = [
      'SET_SELECTED_PERSON',
      'SET_EDIT_MODE',
    ]
    const { onSelectPerson } = mapDispatchToProps(store.dispatch)
    onSelectPerson({})
    const actualActions = store.getActions().map(action => action.type)

    expect(expectedActions).toEqual(actualActions)
  })

  it('maps onCreatePerson to createPerson', () => {
    const expectedActions = [
      'SET_SELECTED_PERSON',
      'SET_EDIT_MODE',
    ]
    const { onCreatePerson } = mapDispatchToProps(store.dispatch)
    onCreatePerson()
    const actualActions = store.getActions().map(action => action.type)

    expect(expectedActions).toEqual(actualActions)
  })

  it('maps onRemovePerson to removePerson', () => {
    const expectedActions = [
      'SET_SELECTED_PERSON',
      'SET_EDIT_MODE',
    ]
    const { onRemovePerson } = mapDispatchToProps(store.dispatch)
    onRemovePerson()
    const actualActions = store.getActions().map(action => action.type)

    expect(expectedActions).toEqual(actualActions)
  })
})
