export default () => {
  if (typeof window !== 'undefined') {
    window.document.activeElement.blur()
  }
}
