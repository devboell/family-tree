import knex from '../../connectors'
import RelationModel from '../relation'

describe('RelationModel', () => {
  beforeEach(async () => {
    await knex.migrate.rollback()
    await knex.migrate.latest()
    await knex.seed.run()
  })

  afterEach(async () => {
    await knex.migrate.rollback()
  })

  afterAll(() => {
    knex.destroy()
  })

  it('findAll', async () => {
    const relations = await RelationModel.findAll()
    expect(relations).toMatchSnapshot()
  })

  it('findByPersonId', async () => {
    const relations = await RelationModel.findByPersonId(5)
    expect(relations).toMatchSnapshot()
  })

  it('create', async () => {
    const personId = 1
    const partnerids = [2, 3, 4]
    const relationIds = await RelationModel.create(personId, partnerids)
    expect(relationIds).toMatchSnapshot()
  })

  it('remove', async () => {
    await RelationModel.remove([1, 2, 3])
    const relations = await RelationModel.findAll()
    expect(relations).toMatchSnapshot()
  })
})
