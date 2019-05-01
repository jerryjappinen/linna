export default async (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, (duration || 2000))
  })
}
