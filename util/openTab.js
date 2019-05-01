export default (url) => {
  if (typeof window !== 'undefined') {
    window.open(url, '_blank')
  }
}
