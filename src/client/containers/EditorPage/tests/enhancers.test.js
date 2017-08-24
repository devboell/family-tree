import { print } from 'graphql'

import {
  PERSONS_QUERY,
  RELATIONS_QUERY,
  CREATE_PERSON_MUTATION,
  UPDATE_PERSON_MUTATION,
  REMOVE_PERSON_MUTATION,
} from '../enhancers'

it('PERSONS_QUERY, has a known query shape', () => {
  expect(print(PERSONS_QUERY)).toMatchSnapshot()
})

it('RELATIONS_QUERY, has a known query shape', () => {
  expect(print(RELATIONS_QUERY)).toMatchSnapshot()
})

it('CREATE_PERSON_MUTATION, has a known query shape', () => {
  expect(print(CREATE_PERSON_MUTATION)).toMatchSnapshot()
})

it('UPDATE_PERSON_MUTATION, has a known query shape', () => {
  expect(print(UPDATE_PERSON_MUTATION)).toMatchSnapshot()
})

it('REMOVE_PERSON_MUTATION, has a known query shape', () => {
  expect(print(REMOVE_PERSON_MUTATION)).toMatchSnapshot()
})
