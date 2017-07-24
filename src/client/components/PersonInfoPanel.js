import styled from 'styled-components'

const PersonInfoPanel = styled.div`
  border: 1px solid black;
  border-radius: 5px;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  > p {
      margin-left: 5px;
      font-size: 14px;
    }
`

export default PersonInfoPanel
