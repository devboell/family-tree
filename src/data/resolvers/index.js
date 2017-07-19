const GraphQLJSON = require('graphql-type-json')

const {
  persons,
  createPerson,
  updatePerson,
  removePerson,
 } = require('./person')
const { partnersForPerson, partnerIds } = require('./partner')
const { relations } = require('./relation')
const { familyTree } = require('./familyTree')


const resolvers = {
  JSON: GraphQLJSON,
  Person: {
    partners: partnersForPerson,
    partnerIds,
  },
  Query: {
    persons,
    relations,
    familyTree,
  },
  Mutation: {
    createPerson,
    updatePerson,
    removePerson,
  },
}

module.exports = resolvers
