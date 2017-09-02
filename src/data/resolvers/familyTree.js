const _ = require('lodash/fp')
const FamilyTreeModel = require('../models/familyTree')


const transformPartnerInfo = ({ relationId, partnerId, ...personData }) =>
  ({ ...personData, partnerInfo: { relationId, partnerId } })

const mergePartnerInfo = (acc, { partnerInfo, ...personData }) => (
  (partnerInfo.partnerId)
  ? { ...personData, partnerInfo: [...acc.partnerInfo, partnerInfo] }
  : { ...personData, partnerInfo: acc.partnerInfo }
)

const mergePartners = values =>
  _.compose(
    _.reduce(mergePartnerInfo)({ partnerInfo: [] }),
    _.map(transformPartnerInfo),
  )(values)

const prepTable = values =>
_.compose(
  _.map(mergePartners),
  _.groupBy('id'),
)(values)

const findPartner = (partnerId, partners) =>
  partners.filter(partner => partnerId === partner.id)[0]

const findChildren = (relationId, persons) =>
  persons.filter(person => relationId === person.bornToId)


const buildPartners = (person, persons, partners) =>
  person.partnerInfo.reduce((acc, info) =>
    [...acc, {
      partner: findPartner(info.partnerId, partners),
      children: findChildren(info.relationId, persons),
    }]
  , [])

const initPerson = (person, persons, partners) =>
  ({
    ..._.omit('partnerInfo')(person),
    partners: buildPartners(person, persons, partners),
  })


const buildTree = (person, persons, partners) => {
  const personNode = initPerson(person, persons, partners)

  return {
    ...personNode,
    partners: personNode.partners.map(partner => ({
      ...partner,
      children: partner.children.map(child =>
        buildTree(child, persons, partners)) // eslint-disable-line comma-dangle
    })) // eslint-disable-line comma-dangle
  }
}

const tree = (id, familyTable, partners) => {
  // TODO: skip 'prepping', just group. Handle partnerInfo during buildTree
  const persons = prepTable(familyTable)
  const rootPerson = persons.filter(person => person.id === id)[0]

  return buildTree(rootPerson, persons, partners)
}

const familyTree = async (obj, args) => {
  const id = parseInt(args.id, 10)
  const familyTreeTable = await FamilyTreeModel.familyTreeTable(id)
  const familyPartners = await FamilyTreeModel.familyPartners(familyTreeTable)

  return tree(id, familyTreeTable, familyPartners)
}

module.exports = {
  transformPartnerInfo,
  mergePartnerInfo,
  mergePartners,
  prepTable,
  familyTree,
}
