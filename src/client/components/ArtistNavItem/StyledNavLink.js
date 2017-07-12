import styled from 'styled-components'
import { NavLink } from 'react-router-dom'


export const activeClassName = 'nav-item-active'

const StyledNavLink = styled(NavLink).attrs({
  activeClassName,
})`
  text-decoration: none;
  > h2 {
    display: inline-block;
    margin: 10px;
    border-bottom: solid transparent 1px;
    color: rgb(222, 81, 11);
  }

  &.${activeClassName} {
    > h2 {
      border-bottom: solid rgb(145, 144, 144) 1px;
    }
  }
`

export default StyledNavLink
