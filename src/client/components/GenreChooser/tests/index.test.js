import React from 'react'
import GenreChooser from '../index'


describe('GenreChooser component', () => {
  describe('with all genres selected', () => {
    const props = {
      genres: ['city', 'landscape'],
      selectedGenres: ['city', 'landscape'],
      onSelectGenre: jest.fn(),
      onDeselectGenre: jest.fn(),
    }

    it('snapshot', () => {
      const wrapper = shallow(<GenreChooser {...props} />)
      expect(wrapper).toMatchSnapshot()
    })

    it('click event', () => {
      const wrapper = shallow(<GenreChooser {...props} />)
      const input = wrapper.find('input').first()
      input.simulate('change')
      expect(props.onDeselectGenre).toHaveBeenCalledWith('city')
    })
  })

  describe('with some genres selected', () => {
    const props = {
      genres: ['city', 'landscape'],
      selectedGenres: ['landscape'],
      onSelectGenre: jest.fn(),
      onDeselectGenre: jest.fn(),
    }

    it('snapshot', () => {
      const wrapper = shallow(<GenreChooser {...props} />)
      expect(wrapper).toMatchSnapshot()
    })

    it('click event', () => {
      const wrapper = shallow(<GenreChooser {...props} />)
      const input = wrapper.find('input').first()
      input.simulate('change')
      expect(props.onSelectGenre).toHaveBeenCalledWith('city')
    })
  })
})
