import reducer from '../reducer'
import { SET_CREATE_MODE } from '../actionTypes'

const initialState = {
  createMode: false,
}
describe('Editor reducer', () => {
  it('correct initialState', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  it('SET_CREATE_MODE', () => {
    const flag = true
    const nextState = {
      ...initialState, createMode: flag,
    }
    const action = {
      type: SET_CREATE_MODE,
      flag,
    }
    expect(reducer(undefined, action)).toEqual(nextState)
  })
})
