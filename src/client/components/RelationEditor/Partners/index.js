import React from 'react'
import { PropTypes } from 'prop-types'
import { Field } from 'redux-form'
import Wrapper from './Wrapper'
import PartnerLabel from './PartnerLabel'
import PartnerItem from './PartnerItem'
import RemoveButton from './RemoveButton'
import ChildrenDiv from './ChildrenDiv'
import Ul from './Ul'

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

const Partners = ({ fields }) =>
  <Wrapper>
    <PartnerLabel>Partners:</PartnerLabel>
    <Ul>
      {fields.map((partner, i) => (
        <Field
          key={`partner-${partner}`}
          name={partner}
          component={ListItem}
          onRemove={() => { fields.remove(i) }}
        />
      ))}
    </Ul>
  </Wrapper>


Partners.propTypes = {
  fields: PropTypes.shape({}).isRequired,
}


export default Partners
