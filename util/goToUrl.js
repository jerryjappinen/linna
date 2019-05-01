export default (url) => {
  if (typeof window !== 'undefined') {
    window.location = url
  }
}
