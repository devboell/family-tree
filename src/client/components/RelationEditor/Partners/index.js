import React from 'react'
import { PropTypes } from 'prop-types'
import { Field } from 'redux-form'
import Ul from './Ul'

const ListItem = ({ input: { value }, onRemove }) =>
  <li>
    {value.partner.name}
    <button type="button" onClick={onRemove}>X</button>
    <div>
      {value.children.map(child => (
        <p
          key={`child-${child.name}`}
        >
          {child.name}
        </p>
      ))}
    </div>
  </li>

ListItem.propTypes = {
  input: PropTypes.object.isRequired,
  onRemove: PropTypes.func.isRequired,
}

const Partners = ({ fields }) =>
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

Partners.propTypes = {
  fields: PropTypes.object.isRequired,
}


export default Partners
