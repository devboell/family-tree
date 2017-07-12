import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Styledlink = styled(Link)`
  display: flex;
  text-decoration: none;
  align-items: center;
  height: 40px;
  margin-bottom: 20px;
  border: 1px solid black;
  border-radius: 5px;

  > p {
    color: black;
    font-size: 16px;
    font-weight: bold;
    margin-left: 5px;
  }
`

export default Styledlink
