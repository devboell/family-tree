import knex from '../../connectors'
import PartnerModel from '../partner'

describe('PartnerModel', () => {
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

  it('findByPersonId', async () => {
    const partners = await PartnerModel.findByPersonId(4)
    expect(partners).toMatchSnapshot()
  })

  it('findChildren', async () => {
    const children = await PartnerModel.findChildren([2, 3, 4])
    expect(children).toMatchSnapshot()
  })

  it('unassignChildren', async () => {
    await PartnerModel.unassignChildren([2, 3, 4])
    const children = await PartnerModel.findChildren([2, 3, 4])
    expect(children).toMatchSnapshot()
  })
})
