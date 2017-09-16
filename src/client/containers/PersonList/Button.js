import styled, { css } from 'styled-components'

const hover = css`
  background-color: gray;
`

const hoverAndSelected = css`
  background-color: rgb(18, 106, 22);
  cursor: default;
`

const Button = styled.button`
  width: 100%;
  background-color: ${props => (
    props.isSelected
    ? 'rgb(18, 106, 22)'
    : 'rgb(76, 175, 80)'
  )};
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
  outline: 0;
  cursor: pointer;

  &:hover {
    ${props => (
      props.isSelected
      ? hoverAndSelected
      : hover
    )};
  }
`
Button.displayName = 'Button'

export default Button
