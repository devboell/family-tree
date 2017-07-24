import { gql, graphql, compose } from 'react-apollo'

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

const personsQuery = gql`
  query personsQuery {
    persons {
      id
      ...personInfo
    }
  }
  ${personInfoFragment}
`

const relationsQuery = gql`
  query relationsQuery {
    relations {
      id
      person1 {
        name
      }
      person2 {
        name
      }
    }
  }
`

const createPersonMutation = gql`
  mutation createPersonMutation(
    $name: String
    $title: String
    $birthDate: Int
    $deathDate: Int
    $gender: String
    $isMonarch: Boolean
    $bornToId: ID
    $partners: [PartnerInput]
  ) {
    createPerson(
      name: $name
      title: $title
      birthDate: $birthDate
      deathDate: $deathDate
      gender: $gender
      isMonarch: $isMonarch
      bornToId: $bornToId
      partners: $partners
    ) {
      id
      ...personInfo
    }
  }
  ${personInfoFragment}
`

const updatePersonMutation = gql`
  mutation updatePersonMutation(
    $id: ID!
    $name: String
    $title: String
    $birthDate: Int
    $deathDate: Int
    $gender: String
    $isMonarch: Boolean
    $bornToId: ID
    $partners: [PartnerInput]
  ) {
    updatePerson(
      id: $id
      name: $name
      title: $title
      birthDate: $birthDate
      deathDate: $deathDate
      gender: $gender
      isMonarch: $isMonarch
      bornToId: $bornToId
      partners: $partners
    ) {
      id
      ...personInfo
    }
  }
  ${personInfoFragment}
`
const removePersonMutation = gql`
  mutation removePersonMutation(
    $id: ID!
  ) {
    removePerson(
      id: $id
    )
  }
`

export default compose(
  graphql(relationsQuery, { name: 'relationsQuery' }),
  graphql(personsQuery, { name: 'personsQuery' }),
  graphql(createPersonMutation, {
    props: ({ mutate }) => ({
      createPersonMutation: values => mutate({
        variables: values,
        refetchQueries: [
          {
            query: personsQuery,
          },
          {
            query: relationsQuery,
          },
        ],
      }),
    }),
  }),
  graphql(updatePersonMutation, {
    props: ({ mutate }) => ({
      updatePersonMutation: values => mutate({
        variables: values,
        refetchQueries: [
          {
            query: personsQuery,
          },
          {
            query: relationsQuery,
          },
        ],
      }),
    }),
  }),
  graphql(removePersonMutation, {
    props: ({ mutate }) => ({
      removePersonMutation: values => mutate({
        variables: values,
        refetchQueries: [
          {
            query: personsQuery,
          },
          {
            query: relationsQuery,
          },
        ],
      }),
    }),
  }),
)
