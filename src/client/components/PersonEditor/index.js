import React from 'react'
import { PropTypes } from 'prop-types'
import { Field, FieldArray, reduxForm } from 'redux-form'
import RelationEditor from '../RelationEditor'
import FieldWrapper from './FieldWrapper'
import Label from './Label'
import Form from './Form'
import EditorFields from './EditorFields'
import PersonSection from './PersonSection'
import RelationSection from './RelationSection'
import TextField from '../TextField'
import SubmitButton from './SubmitButton'

const relationPersons = relation =>
  `${relation.person1.name} - ${relation.person2.name}`

const PersonEditor = ({
  handleSubmit,
  disabled,
  persons,
  relations,
}) =>
  <div>
    {!disabled
    ?
      <Form onSubmit={handleSubmit}>
        <EditorFields>
          <PersonSection>
            <Field name="id" component="input" type="hidden" />
            <FieldWrapper>
              <Label htmlFor="name">Name</Label>
              <Field name="name" component={TextField} />
            </FieldWrapper>
            <FieldWrapper>
              <Label htmlFor="title">Title</Label>
              <Field name="title" component={TextField} />
            </FieldWrapper>
            <FieldWrapper>
              <Label htmlFor="birthDate">Year of Birth</Label>
              <Field name="birthDate" component={TextField} />
            </FieldWrapper>
            <FieldWrapper>
              <Label htmlFor="deathDate">Year of Death</Label>
              <Field name="deathDate" component={TextField} />
            </FieldWrapper>
            <FieldWrapper>
              <Label htmlFor="gender">Gender</Label>
              <Field name="gender" component="select">
                <option value="M">Male</option>
                <option value="F">Female</option>
              </Field>
            </FieldWrapper>
            <FieldWrapper>
              <Label htmlFor="isMonarch">Monarch</Label>
              <Field name="isMonarch" component="input" type="checkbox" />
            </FieldWrapper>
            <FieldWrapper>
              <Label htmlFor="bornToId">Parents</Label>
              <Field name="bornToId" component="select">
                <option value={null}>root person - no parents</option>
                {relations.map(relation => (
                  <option
                    key={`select-relation-${relation.id}`}
                    value={relation.id}
                  >
                    {relationPersons(relation)}
                  </option>
                ))}
              </Field>
            </FieldWrapper>
          </PersonSection>
          <RelationSection>
            <FieldArray name="partners" component={RelationEditor} {...{ persons }} />
          </RelationSection>
        </EditorFields>
        <SubmitButton type="submit">Submit</SubmitButton>
      </Form>
    : <div />
    }

  </div>

PersonEditor.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  persons: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  relations: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
}

export default reduxForm({
  form: 'personForm',
  enableReinitialize: true,
})(PersonEditor)
