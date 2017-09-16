import React from 'react'
import selectionModes from 'containers/PersonList/constants'
import {
  Editor,
  convertFormValuesToSchema,
  newPerson,
  mapStateToProps,
  mapDispatchToProps,
} from '../index'
import { setCreateMode } from '../actions'

describe('Editor component', () => {
  let props
  const formValues = {
    id: 1,
    partners: [
      {
        partner: {
          id: 2,
        },
        relationId: 1,
      },
    ],
  }

  const createId = 1

  beforeEach(() => {
    props = {
      // from enhancer
      loading: false,
      relations: [],
      createPersonMutation: jest.fn(() =>
        Promise.resolve({ data: { createPerson: { id: createId } } })),
      updatePersonMutation: jest.fn().mockReturnValue(Promise.resolve()),
      removePersonMutation: jest.fn(),

      // from parent
      persons: [],
      person: {},
      refetch: jest.fn().mockReturnValue(Promise.resolve()),
      selectionMode: 'UNSELECTED',
      onSelectPerson: jest.fn(),
      onSelectFirst: jest.fn(),

      // from redux
      createMode: true,
      onSetCreateMode: jest.fn(),
      onPrepareCreatePerson: jest.fn(),
    }
  })

  it('convertFormValuesToSchema', () => {
    const expected = {
      id: 1,
      partners: [
        {
          relationId: 1,
          partnerId: 2,
        },
      ],
    }

    expect(convertFormValuesToSchema(formValues)).toEqual(expected)
  })

  it('maps state to props', () => {
    const state = {
      editor: {
        createMode: true,
      },
    }

    const stateProps = mapStateToProps(state)
    expect(stateProps.createMode).toBe(true)
  })

  describe('CREATE mode', () => {
    it('it renders without crashing', () => {
      expect(shallow(<Editor {...props} />)).toMatchSnapshot()
    })

    it('calls createPersonSubmit', async () => {
      const wrapper = shallow(<Editor {...props} />)
      const formProps = wrapper.find('ReduxForm').props()
      const onSubmit = formProps.onSubmit

      await onSubmit(formValues)

      expect(onSubmit.name).toBe('createPersonSubmit')
      expect(props.onSelectPerson).toHaveBeenCalledWith(createId)
    })

    it('sets showRemove prop of EditorControls to false', async () => {
      const wrapper = shallow(<Editor {...props} />)
      const controlProps = wrapper.find('EditorControls').props()

      expect(controlProps.showRemove).toBe(false)
    })

    it('passes newPerson as initialValues to PersonEditor', async () => {
      const wrapper = shallow(<Editor {...props} />)
      const formProps = wrapper.find('ReduxForm').props()

      expect(formProps.initialValues).toEqual(newPerson)
    })

    it('sets createMode to false when selectionMode is not UNSELECTED', async () => {
      const wrapper = shallow(<Editor {...props} />)
      const instance = wrapper.instance()
      const nextProps = {
        onSetCreateMode: jest.fn(),
        selectionMode: selectionModes.SELECTED,
      }
      instance.componentWillReceiveProps(nextProps)
      expect(nextProps.onSetCreateMode).toHaveBeenCalledWith(false)
    })

    it('keeps createMode unchanged when selectionMode is UNSELECTED', async () => {
      const wrapper = shallow(<Editor {...props} />)
      const instance = wrapper.instance()
      const nextProps = {
        onSetCreateMode: jest.fn(),
        selectionMode: selectionModes.UNSELECTED,
      }
      instance.componentWillReceiveProps(nextProps)
      expect(nextProps.onSetCreateMode).not.toHaveBeenCalled()
    })
  })

  describe('UPDATE mode', () => {
    beforeEach(() => {
      props = {
        ...props,
        createMode: false,
        person: {
          id: 1,
          partners: [],
        },
        selectionMode: 'SELECTED',
      }
    })
    it('it renders without crashing', () => {
      expect(shallow(<Editor {...props} />)).toMatchSnapshot()
    })

    it('calls updatePersonSubmit', async () => {
      const wrapper = shallow(<Editor {...props} />)
      const formProps = wrapper.find('ReduxForm').props()
      const onSubmit = formProps.onSubmit

      await onSubmit(formValues)

      expect(onSubmit.name).toBe('updatePersonSubmit')
    })

    it('calls removePersonSubmit', async () => {
      const wrapper = shallow(<Editor {...props} />)
      const formProps = wrapper.find('EditorControls').props()
      const onRemovePerson = formProps.onRemovePerson

      await onRemovePerson()

      expect(props.removePersonMutation).toHaveBeenCalledWith({ id: props.person.id })
      expect(props.onSelectFirst).toHaveBeenCalled()
    })

    it('sets showRemove prop of EditorControls to true', async () => {
      const wrapper = shallow(<Editor {...props} />)
      const controlProps = wrapper.find('EditorControls').props()

      expect(controlProps.showRemove).toBe(true)
    })

    it('passes person as initialValues to PersonEditor', async () => {
      const wrapper = shallow(<Editor {...props} />)
      const formProps = wrapper.find('ReduxForm').props()

      expect(formProps.initialValues).toEqual(props.person)
    })
  })

  describe('LOADING mode', () => {
    beforeEach(() => {
      props = {
        ...props,
        loading: true,
      }
    })
    it('renders loading ... div', () => {
      expect(shallow(<Editor {...props} />)).toMatchSnapshot()
    })
  })

  describe('EMPTY mode, showEditor is false', () => {
    beforeEach(() => {
      props = {
        ...props,
        createMode: false,
      }
    })
    it('only renders EditorControls', () => {
      expect(shallow(<Editor {...props} />)).toMatchSnapshot()
    })
  })

  describe('mapDispatchToProps', () => {
    const dispatch = jest.fn()
    const ownProps = {
      onUnselect: jest.fn(),
    }

    const {
      onSetCreateMode,
      onPrepareCreatePerson,
    } = mapDispatchToProps(dispatch, ownProps)

    beforeEach(() => {
      dispatch.mockReset()
    })

    it('maps onSetCreateMode to setCreateMode', () => {
      const flag = true
      const expected = setCreateMode(flag)
      onSetCreateMode(flag)
      expect(dispatch).toHaveBeenCalledWith(expected)
    })

    it('maps onPrepareCreatePerson to onUnselect and setCreateMode', () => {
      const flag = true
      const expected = setCreateMode(flag)
      onPrepareCreatePerson(flag)
      expect(ownProps.onUnselect).toHaveBeenCalled()
      expect(dispatch).toHaveBeenCalledWith(expected)
    })
  })
})
