import wait from '../../util/wait'

describe('Util wait', () => {
  it('should wait for seconds', async () => {
    jest.setTimeout(3000)

    const startTime = new Date()
    await wait(2000)
    const endTime = new Date()
    expect(Math.round((endTime - startTime) / 1000)).toEqual(2)
  })
})
