import tryPromises from '../../util/tryPromises'
import wait from '../../util/wait'

const failingCallback = async () => {
  await wait(1)
  throw new Error('This error is intentional')
}

describe('tryPromises', () => {

  it('should wait all asynchronously', async () => {

    const seconds = [1000, 2000]

    const startTime = new Date()
    await tryPromises(seconds.map(wait))
    const endTime = new Date()

    expect(Math.round((endTime - startTime) / 1000)).toEqual(Math.max(...seconds) / 1000)
  })

  it('should go through with no error', async (done) => {
    await tryPromises([failingCallback()])
    done()
  })

  it('should return undefined upon error', async () => {
    const results = await tryPromises([failingCallback()])
    expect(results[0]).toBeUndefined()
  })

})
