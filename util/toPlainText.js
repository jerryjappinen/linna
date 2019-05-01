// https://github.com/stiang/remove-markdown
import removeMarkdown from 'remove-markdown'

// Remove HTML and Markdown formatting
export default (string) => {
  return removeMarkdown(string, {
    stripListLeaders: true,
    listUnicodeChar: '',
    gfm: true,
    useImgAltText: false
  }).trim()
}
