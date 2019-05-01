import createClient from '../../vendor/medium'

describe('medium', () => {
  const client = createClient()

  it('should expose fetchFeed', () => {
    expect(client.fetchFeed).toBeInstanceOf(Function)
  })

})
