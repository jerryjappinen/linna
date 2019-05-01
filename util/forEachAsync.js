export default async (arrayOrObject, asyncCallback) => {
  const promises = []

  // Array
  if (arrayOrObject instanceof Array) {
    arrayOrObject.forEach((item, i, array) => {
      promises.push(asyncCallback(item, i, array))
    })

  // Object
  } else if (arrayOrObject instanceof Object) {
    for (const key in arrayOrObject) {
      promises.push(asyncCallback(arrayOrObject[key], key))
    }

  }

  return Promise.all(promises)
}
