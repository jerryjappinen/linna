import { isPlainObject, isString, snakeCase } from 'lodash'

// https://www.contentful.com/developers/docs/references/images-api/#/reference/resizing-&-cropping/change-the-resizing-behavior
export default (url, options) => {
  const realOptions = isPlainObject(url) ? url : (options || {})
  const params = []
  let realUrl = null

  if (url && isString(url)) {
    realUrl = url

  } else if (realOptions.url) {
    realUrl = realOptions.url

  } else if (
    realOptions.image &&
    realOptions.image.fields &&
    realOptions.image.fields.file &&
    realOptions.image.fields.file.url
  ) {
    realUrl = realOptions.image.fields.file.url
  }

  // Set fit & resize behavior easily
  if (realOptions.fit) {
    params.push('fit=' + snakeCase(realOptions.fit))
  }

  if (realOptions.focus) {
    params.push('f=' + snakeCase(realOptions.focus))
  }

  if (realOptions.format) {
    params.push('fm=' + realOptions.format.toLowerCase())
  }

  if (realOptions.width) {
    params.push('w=' + realOptions.width)
  }

  if (realOptions.height) {
    params.push('h=' + realOptions.height)
  }

  if (realUrl) {
    return realUrl + (params.length ? '?' + params.join('&') : '')
  }

  return null
}
