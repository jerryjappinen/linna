// Don't throw errors, return failing promises with `undefined` as return value
export default async (promises) => {
  if (promises instanceof Array) {

    // Handle multiple promises with Promise.all
    return Promise.all(
      promises.map(async (promise) => {

        // Try promise
        try {
          return await promise

        // Don't throw errors, return `undefined` instead
        } catch (error) {
          return undefined
        }

      })
    )
  }

  return promises
}
