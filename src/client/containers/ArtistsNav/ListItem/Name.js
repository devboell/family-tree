import styled from 'styled-components'

const Name = styled.h3`
  display: inline-block;
  margin: 10px;
  border-bottom: ${props => (props.selected ? 'solid gray 1px' : 'solid transparent 1px')};
  color: rgb(222, 81, 11);
`

export default Name
