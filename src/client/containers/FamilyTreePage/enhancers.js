import { gql, graphql, compose } from 'react-apollo'

// TODO: unused for now
const personsQuery = gql`
  query personsQuery {
    persons {
      id
      name
    }
  }
`
const familyTreeQuery = gql`
  query familyTreeQuery {
    familyTree (id: 1)
  }
`
export default compose(
  graphql(personsQuery, {
    name: 'personsQuery',
    options: {
      fetchPolicy: 'network-only',
    },
  }),
  graphql(familyTreeQuery, {
    name: 'familyTreeQuery',
    options: {
      fetchPolicy: 'network-only',
    },
  }),
)
