import styled from 'styled-components'
import { NavLink } from 'react-router-dom'


export const activeClassName = 'nav-item-active'

const StyledNavLink = styled(NavLink).attrs({
  activeClassName,
})`
  text-decoration: none;
  display: inline-block;
  > h3 {
    margin-left: 10px;
    margin-bottom: 10px;
    color: black;
    border-bottom: solid transparent 1px;
  }

  &.${activeClassName} {
    > h3 {
      border-bottom: solid black 1px;
    }
  }
`

export default StyledNavLink
