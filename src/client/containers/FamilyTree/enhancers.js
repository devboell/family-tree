import { gql, graphql } from 'react-apollo'
import { isEmpty } from 'lodash/fp'

export const FAMILY_TREE_QUERY = gql`
  query familyTreeQuery ($id: ID!) {
    familyTree (id: $id)
  }
`
export default graphql(FAMILY_TREE_QUERY, {
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
