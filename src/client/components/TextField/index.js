import React from 'react'
import { PropTypes } from 'prop-types'
import InputText from './InputText'

const TextField = ({ input }) => (
  <InputText
    {...input}
    autoComplete="off"
    type="text"
  />
)

TextField.propTypes = {
  input: PropTypes.shape({}).isRequired,
}


export default TextField
