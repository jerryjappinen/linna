import createClient from '../../vendor/calendly'

describe('calendly', () => {
  const client = createClient('someApiKey')

  it('should expose fetchFeed', () => {
    expect(client.fetchEventTypes).toBeInstanceOf(Function)
  })

})
