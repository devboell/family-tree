import React from 'react'
import { PropTypes } from 'prop-types'
import { Field } from 'redux-form'

import ListItem from './ListItem'
import Wrapper from './Wrapper'
import PartnerLabel from './PartnerLabel'
import Ul from './Ul'


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
