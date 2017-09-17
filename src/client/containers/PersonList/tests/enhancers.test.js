import { print } from 'graphql'

import {
  PERSONS_QUERY,
  personsQueryProps,
} from '../enhancers'

describe('Editor enhancers', () => {
  it('PERSONS_QUERY has a known shape', () => {
    expect(print(PERSONS_QUERY)).toMatchSnapshot()
  })

  it('correctly destructures query props', () => {
    const queryProps = {
      data: {
        persons: [],
        loading: true,
        refetch: jest.fn(),
      },
    }
    expect(personsQueryProps(queryProps)).toEqual(queryProps.data)
  })
})
