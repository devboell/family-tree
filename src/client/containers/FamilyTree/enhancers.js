import { gql, graphql } from 'react-apollo'
import { isEmpty } from 'lodash/fp'

const familyTreeQuery = gql`
  query familyTreeQuery ($id: ID!) {
    familyTree (id: $id)
  }
`
export default graphql(familyTreeQuery, {
  skip: ({ person }) => isEmpty(person),
  props: ({ data: { familyTree, loading } }) => ({
    familyTree,
    loading,
  }),
  options: ({ personId }) => ({
    variables: {
      id: personId,
    },
  }),
})
