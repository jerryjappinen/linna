import createClient from '../../vendor/instagram'

describe('instagram', () => {
  const client = createClient('123')

  it('should expose fetch methods', () => {
    expect(client.fetch).toBeInstanceOf(Function)
    expect(client.fetchOwnFeed).toBeInstanceOf(Function)
  })

})
