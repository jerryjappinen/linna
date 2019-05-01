// Timestamp logging
let prevTimeStamp = null

export default (...args) => {
  const currentTimestamp = new Date()

  // eslint-disable-next-line no-console
  console.log(
    currentTimestamp,
    ...(prevTimeStamp
      ? [currentTimestamp.getTime() - prevTimeStamp.getTime()]
      : []
    ),
    ...args
  )

  prevTimeStamp = currentTimestamp
}
