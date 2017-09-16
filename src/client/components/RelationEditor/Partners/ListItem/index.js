import React from 'react'
import { PropTypes } from 'prop-types'

import PartnerItem from './PartnerItem'
import RemoveButton from './RemoveButton'
import ChildrenDiv from './ChildrenDiv'

const ListItem = ({ input: { value }, onRemove }) =>
  <li>
    <PartnerItem>
      <RemoveButton type="button" onClick={onRemove}>X</RemoveButton>
      <p>{value.partner.name}</p>
    </PartnerItem>
    <ChildrenDiv>
      {value.children.map(child => (
        <p
          key={`child-${child.name}`}
        >
          {child.name}
        </p>
      ))}
    </ChildrenDiv>
  </li>

ListItem.propTypes = {
  input: PropTypes.shape({}).isRequired,
  onRemove: PropTypes.func.isRequired,
}

export default ListItem
