const {
  makeExecutableSchema,
} = require('graphql-tools')
const resolvers = require('../resolvers')

const typeDefs = `
scalar JSON

type Person {
  id: ID!
  name: String
  title: String
  birthDate: Int
  deathDate: Int
  gender: String
  isMonarch: Boolean
  bornToId: ID
  partnerIds: [String]
  partners: [Partner]
}

type Partner {
  relationId: ID!
  partner: Person
  children: [Person]
}

input PartnerInput {
  relationId: Int
  partnerId: Int
}

type Relation {
  id: ID!
  person1: Person
  person2: Person
}

type Query {
  persons: [Person]
  relations: [Relation]
  familyTree(id: ID!): JSON
}

type Mutation {
  createPerson(
    name: String
    title: String
    birthDate: Int
    deathDate: Int
    gender: String
    isMonarch: Boolean
    bornToId: ID
    partners: [PartnerInput]
  ): Person

  updatePerson(
    id: ID!
    name: String
    title: String
    birthDate: Int
    deathDate: Int
    gender: String
    isMonarch: Boolean
    bornToId: ID
    partners: [PartnerInput]
  ): Person

  removePerson(
    id: ID!
  ): Boolean
}

schema {
  query: Query
  mutation: Mutation
}
`

const schema = makeExecutableSchema({ typeDefs, resolvers })
module.exports = schema
