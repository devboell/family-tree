import React from 'react'
import EditorControls from '../index'
import Button from '../Button'

const props = {
  editMode: 'create',
  selectedPerson: { id: 1 },
  onCreatePerson: jest.fn(),
  onRemovePerson: jest.fn(),
  removePersonMutation: jest.fn(() => new Promise(
    reslove => reslove(),
  )),
}

describe('EditorControls component', () => {
  it('renders in create mode', () => {
    const wrapper = shallow(<EditorControls {...props} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('renders in update mode', () => {
    const updateProps = { ...props, editMode: 'update' }
    const wrapper = shallow(<EditorControls {...updateProps} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('calls removePersonMutation', () => {
    const updateProps = { ...props, editMode: 'update' }
    const wrapper = shallow(<EditorControls {...updateProps} />)
    wrapper.find(Button).at(1).simulate('click')

    expect(props.removePersonMutation).toHaveBeenCalledWith({ id: 1 })
    expect(props.onRemovePerson).toHaveBeenCalled()
  })
})
