import forEachAsync from '../../util/forEachAsync'
import wait from '../../util/wait'

describe('forEachAsync', () => {

  it('should wait all asynchronously', async () => {
    jest.setTimeout(6000)

    const durations = [
      1000,
      2000,
      3000,
      4000
    ]

    const startTime = new Date()

    // Wait for each promise to resolve
    await forEachAsync(durations, wait)

    const endTime = new Date()
    const diff = endTime - startTime

    expect(Math.round((diff) / 1000)).toEqual(Math.max(...durations) / 1000)
  })

})
