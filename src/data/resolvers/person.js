const omit = require('lodash/fp/omit')
const PersonModel = require('../models/person')
const PartnerResolver = require('./partner')

// Query
const persons = () =>
  PersonModel.findAll()

// Person
// partners() (see ./partner.js)
// partnerIds() (see ./partner.js)

// Mutation
const createPerson = async (_, args) => {
  const personData = omit('partners', args)
  const person = await PersonModel.create(personData)
  await PartnerResolver.createPartners(person.id, args.partners)

  return person
}

const updatePerson = async (_, args) => {
  const personData = omit('partners', args)
  const person = await PersonModel.update(personData)

  await PartnerResolver.updatePartners(person.id, args.partners)

  return person
}

const removePerson = async (_, args) => {
  await PersonModel.remove(args.id)
  await PartnerResolver.removePartners(args.id)

  return true
}

module.exports = {
  persons,
  createPerson,
  updatePerson,
  removePerson,
}
