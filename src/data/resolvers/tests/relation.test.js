import knex from '../../connectors'
import { relations } from '../relation'


describe('relation, resolvers', () => {
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

  it('relations', async () => {
    expect(await relations()).toMatchSnapshot()
  })
})
