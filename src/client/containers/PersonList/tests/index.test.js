import React from 'react'
import { defaults } from 'lodash/fp'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { PersonList, mapDispatchToProps, mapStateToProps } from '../index'
import selectionModes from '../constants'
import { setSelectedPersonId, setSelectionMode } from '../actions'

const MockChild = () => <div />
const persons = [{ id: '3' }, { id: '4' }]


describe('PersonList component', () => {
  let defaultProps

  beforeEach(() => {
    defaultProps = {
      loading: false,
      persons: [],
      refetch: jest.fn(),
      selectedPersonId: 'no_selection',
      selectionMode: selectionModes.SELECT_FIRST,
      onSelectPerson: jest.fn(),
      onSelectFirst: jest.fn(),
      onUnselect: jest.fn(),
    }
  })
  describe('LOADING is true', () => {
    let props
    beforeEach(() => {
      props = defaults(defaultProps)({ loading: true })
    })

    it('shows loading ... message', () => {
      const wrapper = shallow(
        <PersonList {...props}>
          <MockChild />
        </PersonList>)

      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('list is EMPTY', () => {
    let wrapper
    beforeEach(() => {
      wrapper = shallow(
        <PersonList {...defaultProps}>
          <MockChild />
        </PersonList>)
    })

    it('renders empty list', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('displays empty list message', () => {
      const emptyMessageText = wrapper.find('EmptyListMessage').dive().text()
      expect(emptyMessageText).toBe('no persons found')
    })

    it('passes empty person to child component', () => {
      const person = wrapper.find('MockChild').props().person
      expect(person).toEqual({})
    })
  })

  // tests the logic in componentWillReceiveProps
  describe('list receives persons prop, selectionMode is SELECT_FIRST', () => {
    let wrapper

    beforeEach(() => {
      wrapper = shallow(
        <PersonList {...defaultProps}>
          <MockChild />
        </PersonList>)
    })

    it('calls onSelectPerson with id of first list item', () => {
      wrapper.setProps({ persons })
      expect(defaultProps.onSelectPerson).toHaveBeenCalledWith('3')
    })

    it('does not call onSelectPerson when persons is empty', () => {
      wrapper.setProps({ persons: [] })
      expect(defaultProps.onSelectPerson).not.toHaveBeenCalled()
    })
  })

  describe('list is NOT EMPTY, selectionMode is SELECTED', () => {
    let props

    beforeEach(() => {
      props = defaults(defaultProps)(
        {
          persons,
          selectionMode: selectionModes.SELECTED,
          selectedPersonId: '3',
        },
      )
    })

    it('renders', () => {
      const wrapper = shallow(
        <PersonList {...props}>
          <MockChild />
        </PersonList>)

      expect(wrapper).toMatchSnapshot()
    })

    it('calls onSelectPerson when Button is clicked', () => {
      const wrapper = shallow(
        <PersonList {...props}>
          <MockChild />
        </PersonList>)
      const button = wrapper.find('Button').at(1)
      button.simulate('click')
      expect(props.onSelectPerson).toHaveBeenCalledWith('4')
    })
  })
})

describe('PersonList mapDispatchToProps, mapStateToProps', () => {
  const middlewares = [thunk]
  const mockStore = configureMockStore(middlewares)
  const store = mockStore({})

  const {
    onSelectPerson,
    onSelectFirst,
    onUnselect,
  } = mapDispatchToProps(store.dispatch)

  beforeEach(() => {
    store.clearActions()
  })

  it('maps onSelectPerson to selectPerson thunk', () => {
    const id = '1'
    const expectedActions = [
      setSelectedPersonId(id),
      setSelectionMode(selectionModes.SELECTED),
    ]
    onSelectPerson(id)
    const receivedActions = store.getActions()
    expect(receivedActions).toEqual(expectedActions)
  })

  it('maps onSelectFirst to selectFirst thunk', () => {
    const expectedActions = [
      setSelectedPersonId('no_selection'),
      setSelectionMode(selectionModes.SELECT_FIRST),
    ]
    onSelectFirst()
    const receivedActions = store.getActions()
    expect(receivedActions).toEqual(expectedActions)
  })

  it('maps onUnselect to unselect thunk', () => {
    const expectedActions = [
      setSelectedPersonId('no_selection'),
      setSelectionMode(selectionModes.UNSELECTED),
    ]
    onUnselect()
    const receivedActions = store.getActions()
    expect(receivedActions).toEqual(expectedActions)
  })

  it('maps state to props', () => {
    const state = {
      personList: {
        selectedPersonId: '2',
        selectionMode: selectionModes.SELECTED,
      },
    }

    const stateProps = mapStateToProps(state)
    expect(stateProps.selectedPersonId).toBe('2')
    expect(stateProps.selectionMode).toBe(selectionModes.SELECTED)
  })
})
