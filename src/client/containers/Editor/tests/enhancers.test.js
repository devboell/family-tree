import { print } from 'graphql'

import {
    RELATIONS_QUERY,
    CREATE_PERSON_MUTATION,
    UPDATE_PERSON_MUTATION,
    REMOVE_PERSON_MUTATION,
    relationsQueryProps,
    refetchQueries,
    createPersonMutationProps,
    updatePersonMutationProps,
    removePersonMutationProps,
  } from '../enhancers'

describe('Editor enhancers', () => {
  it('RELATIONS_QUERY has a known shape', () => {
    expect(print(RELATIONS_QUERY)).toMatchSnapshot()
  })

  it('CREATE_PERSON_MUTATION has a known shape', () => {
    expect(print(CREATE_PERSON_MUTATION)).toMatchSnapshot()
  })

  it('UPDATE_PERSON_MUTATION has a known shape', () => {
    expect(print(UPDATE_PERSON_MUTATION)).toMatchSnapshot()
  })

  it('REMOVE_PERSON_MUTATION has a known shape', () => {
    expect(print(REMOVE_PERSON_MUTATION)).toMatchSnapshot()
  })

  it('correctly destructures query props', () => {
    const queryProps = {
      data: {
        relations: [],
        loading: true,
      },
    }
    expect(relationsQueryProps(queryProps)).toEqual(queryProps.data)
  })

  it('refetchQueries specifies correct query', () => {
    const expected = [
      {
        query: RELATIONS_QUERY,
      },
    ]
    expect(refetchQueries).toEqual(expected)
  })

  describe('mutation props', () => {
    const mutate = jest.fn()
    const values = { id: 1, name: 'bla' }

    beforeEach(() => {
      mutate.mockReset()
    })

    it('createPersonMutationProps', () => {
      const mutation = createPersonMutationProps({ mutate })
      mutation.createPersonMutation(values)
      expect(mutate).toHaveBeenCalledWith({ refetchQueries, variables: values })
    })

    it('updatePersonMutationProps', () => {
      const mutation = updatePersonMutationProps({ mutate })
      mutation.updatePersonMutation(values)
      expect(mutate).toHaveBeenCalledWith({ refetchQueries, variables: values })
    })

    it('removePersonMutationProps', () => {
      const mutation = removePersonMutationProps({ mutate })
      mutation.removePersonMutation(values)
      expect(mutate).toHaveBeenCalledWith({ refetchQueries, variables: values })
    })
  })
})
