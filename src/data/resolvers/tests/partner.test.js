import knex from '../../connectors'
import partner from '../partner'

describe('partner, resolvers', () => {
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

  it('partnersForPerson', async () => {
    const person = { id: 4 }
    const partners = await partner.partnersForPerson(person)
    expect(partners).toMatchSnapshot()
  })

  it('partnerIds', async () => {
    const person = { id: 4 }
    const partnerIds = await partner.partnerIds(person)
    expect(partnerIds).toMatchSnapshot()
  })

  it('createPartners', async () => {
    const partnerInputs = [{ partnerId: 6 }, { partnerId: 7 }]
    await partner.createPartners(4, partnerInputs)
    const partnerIds = await partner.partnerIds({ id: 4 })

    expect(partnerIds).toMatchSnapshot()
  })

  it('updatePartners', async () => {
    const partnerInputs = [
      { partnerId: 14, relationId: 5 },
      { partnerId: 7, relationId: null },
    ]
    await partner.updatePartners(4, partnerInputs)
    const partnerIds = await partner.partnerIds({ id: 4 })

    expect(partnerIds).toMatchSnapshot()
  })
})
