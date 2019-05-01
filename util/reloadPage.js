export default (keepCache) => {
  if (typeof window !== 'undefined') {
    window.location.reload(!keepCache)
  }
}
