const omit = require('lodash/fp/omit')
const difference = require('lodash/fp/difference')
const PartnerModel = require('../models/partner')
const RelationModel = require('../models/relation')


const assignChildrenToPartner = (partners, allChildren) =>
  partners.map(partnerWithId => ({
    relationId: partnerWithId.relationId,
    partner: omit('relationId', partnerWithId),
    children: allChildren.filter(child => child.bornToId === partnerWithId.relationId),
  }))

const partnersForPerson = async (person) => {
  const partners = await PartnerModel.findByPersonId(person.id)
  const relationIds = partners.map(partner => partner.relationId)
  const children = await PartnerModel.findChildren(relationIds)

  const partnersWithChildren = assignChildrenToPartner(partners, children)
  return partnersWithChildren
}

const partnerIds = async (person) => {
  const partners = await PartnerModel.findByPersonId(person.id)
  return partners.map(partner => partner.id)
}

const createPartners = async (personId, partnerInputs) =>
  RelationModel.create(personId, partnerInputs.map(partner => partner.partnerId))

const updatePartners = async (personId, partnerInputs) => {
  const relations = await RelationModel.findByPersonId(personId)
  const relationIds = relations.map(relation => relation.id)
  const relationsToDelete = difference(relationIds)(partnerInputs
    .map(prt => prt.relationId))

  if (relationsToDelete.length) {
    await RelationModel.remove(relationsToDelete)
    await PartnerModel.unassignChildren(relationsToDelete)
  }
  const newPartnerIds = partnerInputs
    .filter(prt => prt.relationId === null)
    .map(prt => prt.partnerId)

  if (newPartnerIds.length) {
    await RelationModel.create(personId, newPartnerIds)
  }
}

const removePartners = async (personId) => {
  const relations = await RelationModel.findByPersonId(personId)
  const relationIds = relations.map(relation => relation.id)

  if (relationIds.length) {
    await RelationModel.remove(relationIds)
    await PartnerModel.unassignChildren(relationIds)
  }
}

module.exports = {
  partnersForPerson,
  partnerIds,
  createPartners,
  updatePartners,
  removePartners,
}
