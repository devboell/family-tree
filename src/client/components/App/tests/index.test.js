import React from 'react'
import App from '../index'


describe('App component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />)
    expect(wrapper).toMatchSnapshot()
  })

  it('FamilyTreePage Route', () => {
    const wrapper = shallow(<App />)
    const routeProps = wrapper.find('Route').at(0).props()
    expect(routeProps.component.name).toBe('FamilyTreePage')
    expect(routeProps.path).toBe('/')
  })

  it('EditorPage Route', () => {
    const wrapper = shallow(<App />)
    const routeProps = wrapper.find('Route').at(1).props()
    expect(routeProps.component.name).toBe('EditorPage')
    expect(routeProps.path).toBe('/editor')
  })
})
