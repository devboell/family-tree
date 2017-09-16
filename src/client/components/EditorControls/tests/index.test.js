import React from 'react'
import EditorControls from '../index'
import Button from '../Button'


const props = {
  onPrepareCreatePerson: jest.fn(),
  onRemovePerson: jest.fn(),
  showRemove: true,
}

describe('EditorControls component', () => {
  it('renders in create mode', () => {
    const wrapper = shallow(<EditorControls {...props} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('renders in update mode', () => {
    const newProps = { ...props, showRemove: false }
    const wrapper = shallow(<EditorControls {...newProps} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('calls onPrepareCreatePerson', () => {
    const wrapper = shallow(<EditorControls {...props} />)
    wrapper.find(Button).at(0).simulate('click')

    expect(props.onPrepareCreatePerson).toHaveBeenCalled()
  })

  it('calls onRemovePerson', () => {
    const wrapper = shallow(<EditorControls {...props} />)
    wrapper.find(Button).at(1).simulate('click')

    expect(props.onRemovePerson).toHaveBeenCalled()
  })
})
