import { gql, graphql } from 'react-apollo'

const personInfoFragment = gql`
  fragment personInfo on Person {
    name
    title
    birthDate
    deathDate
    gender
    isMonarch
    bornToId
    partnerIds
    partners {
      relationId
      partner {
        id
        name
      }
      children {
        name
      }
    }
  }
`

const PERSONS_QUERY = gql`
  query personsQuery {
    persons {
      id
      ...personInfo
    }
  }
  ${personInfoFragment}
`
export default graphql(PERSONS_QUERY, {
  props: ({ data: { persons, loading, refetch } }) => ({
    persons,
    loading,
    refetch,
  }),
})
