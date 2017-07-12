import { makeExecutableSchema } from 'graphql-tools'
import resolvers from './resolvers'

const typeDefs = `

  type Artist {
    name: String
    path: String
    paintings: [Painting]
  }

  type Painting {
    title: String!
    name: String!
    genre: String!
  }

  type Query {
    artists: [Artist]
    artistByPath(path: String): Artist
  }

  schema {
    query: Query
  }
`

const schema = makeExecutableSchema({ typeDefs, resolvers })
module.exports = schema
