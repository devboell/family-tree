import knex from '../../connectors'
import FamilyTreeModel from '../../models/familyTree'
import {
  transformPartnerInfo,
  mergePartnerInfo,
  mergePartners,
  prepTable,
  familyTree,
} from '../familyTree'

describe('familyTree resolver', () => {
  it('transformPartnerInfo', () => {
    const fixture = { id: 1, name: 'John', partnerId: 2, relationId: 1 }
    const expected = { id: 1, name: 'John', partnerInfo: { partnerId: 2, relationId: 1 } }
    expect(transformPartnerInfo(fixture)).toEqual(expected)
  })

  it('mergePartnerInfo, null partner', () => {
    const acc = { partnerInfo: [] }
    const fixture = { id: 1, name: 'John', partnerInfo: { partnerId: null, relationId: null } }
    const expected = {
      id: 1,
      name: 'John',
      partnerInfo: [],
    }
    expect(mergePartnerInfo(acc, fixture)).toEqual(expected)
  })

  it('mergePartnerInfo, single partner', () => {
    const acc = { partnerInfo: [] }
    const fixture = { id: 1, name: 'John', partnerInfo: { partnerId: 2, relationId: 1 } }
    const expected = {
      id: 1,
      name: 'John',
      partnerInfo: [
        { partnerId: 2, relationId: 1 },
      ],
    }
    expect(mergePartnerInfo(acc, fixture)).toEqual(expected)
  })

  it('mergePartnerInfo, multiple partners', () => {
    const acc = { id: 1, name: 'John', partnerInfo: [{ partnerId: 2, relationId: 1 }] }
    const fixture = { id: 1, name: 'John', partnerInfo: { partnerId: 3, relationId: 2 } }
    const expected = {
      id: 1,
      name: 'John',
      partnerInfo: [
        { partnerId: 2, relationId: 1 },
        { partnerId: 3, relationId: 2 },
      ],
    }
    expect(mergePartnerInfo(acc, fixture)).toEqual(expected)
  })

  it('mergePartners', () => {
    const fixture = [
      { id: 1, name: 'John', partnerId: 2, relationId: 1 },
      { id: 1, name: 'John', partnerId: 3, relationId: 2 },
    ]
    const expected = {
      id: 1,
      name: 'John',
      partnerInfo: [
        { partnerId: 2, relationId: 1 },
        { partnerId: 3, relationId: 2 },
      ],
    }
    expect(mergePartners(fixture)).toEqual(expected)
  })
})

describe('familyTree resolver, async', () => {
  let familyTreeTable

  beforeEach(async () => {
    await knex.migrate.rollback()
    await knex.migrate.latest()
    await knex.seed.run()
    familyTreeTable = await FamilyTreeModel.familyTreeTable(1)
  })

  afterEach(async () => {
    await knex.migrate.rollback()
  })

  afterAll(() => {
    knex.destroy()
  })

  it('prepTable', () => {
    expect(prepTable(familyTreeTable)).toMatchSnapshot()
  })

  it('familyTree, id 1', async () => {
    const tree = await familyTree(undefined, { id: 1 })
    expect(tree).toMatchSnapshot()
  })

  it('familyTree, id 9', async () => {
    const tree = await familyTree(undefined, { id: 9 })
    expect(tree).toMatchSnapshot()
  })
})
