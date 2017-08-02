import styled from 'styled-components'

const PersonInfoPanel = styled.div`
  border: 1px solid black;
  border-radius: 5px;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  > p {
      margin-top: 5px;
      text-align: center;
      font-size: 14px;
      color: blue;
    }
`

export default PersonInfoPanel
