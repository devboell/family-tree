import knex from '../../connectors'
import FamilyTreeModel from '../familyTree'

describe('FamilyTreeModel', () => {
  let familyTreeTable
  let familyPartners

  beforeEach(async () => {
    await knex.migrate.rollback()
    await knex.migrate.latest()
    await knex.seed.run()
    familyTreeTable = await FamilyTreeModel.familyTreeTable(1)
    familyPartners = await FamilyTreeModel.familyPartners(familyTreeTable)
  })

  afterEach(async () => {
    await knex.migrate.rollback()
  })

  afterAll(() => {
    knex.destroy()
  })

  it('familyTreeTable', () => {
    expect(familyTreeTable).toMatchSnapshot()
  })

  it('familyPartners', () => {
    expect(familyPartners).toMatchSnapshot()
  })
})
