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

export const RELATIONS_QUERY = gql`
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

export const CREATE_PERSON_MUTATION = gql`
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

export const UPDATE_PERSON_MUTATION = gql`
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
export const REMOVE_PERSON_MUTATION = gql`
  mutation removePersonMutation(
    $id: ID!
  ) {
    removePerson(
      id: $id
    )
  }
`

export const relationsQueryProps = ({ data: { relations, loading } }) => ({
  relations,
  loading,
})

export const refetchQueries = [
  {
    query: RELATIONS_QUERY,
  },
]

export const createPersonMutationProps = ({ mutate }) => ({
  createPersonMutation: values => mutate({
    variables: values,
    refetchQueries,
  }),
})

export const updatePersonMutationProps = ({ mutate }) => ({
  updatePersonMutation: values => mutate({
    variables: values,
    refetchQueries,
  }),
})

export const removePersonMutationProps = ({ mutate }) => ({
  removePersonMutation: values => mutate({
    variables: values,
    refetchQueries,
  }),
})

export default compose(
  graphql(RELATIONS_QUERY, {
    props: relationsQueryProps,
  }),
  graphql(CREATE_PERSON_MUTATION, {
    props: createPersonMutationProps,
  }),
  graphql(UPDATE_PERSON_MUTATION, {
    props: updatePersonMutationProps,
  }),
  graphql(REMOVE_PERSON_MUTATION, {
    props: removePersonMutationProps,
  }),
)
