// Clear user's selection
export default () => {
  if (typeof window !== 'undefined') {

    if (
      window.document &&
      window.document.selection &&
      window.document.selection.empty
    ) {
      window.document.selection.empty()

    } else if (window.getSelection) {
      window.getSelection().removeAllRanges()
    }

  }
}
