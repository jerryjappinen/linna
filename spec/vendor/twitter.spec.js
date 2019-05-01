import createClient from '../../vendor/twitter'

describe('twitter', () => {
  const client = createClient('key', 'secret')

  it('should expose fetchTimeline', () => {
    expect(client.fetchTimeline).toBeInstanceOf(Function)
  })

})
