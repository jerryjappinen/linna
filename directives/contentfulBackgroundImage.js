import { isPlainObject, snakeCase } from 'lodash'

const normalizeOptions = (input) => {

  let options = {
    fit: (input && input.focus) ? 'thumb' : null,
    focus: null,
    width: null,
    height: null
  }

  // More options provided with a wrapper
  if (input && isPlainObject(input) && input.image) {
    options = {
      ...options,
      ...input
    }

  // Allow passing file only without options wrapper
  } else {
    options.image = input
  }

  return options
}

// NOTE: this should match ContentfulImage.vue
// https://www.contentful.com/developers/docs/references/images-api/#/reference/resizing-&-cropping/change-the-resizing-behavior
const composeImageUrl = (options) => {
  const params = []

  // Set fit & resize behavior easily
  if (options.fit) {
    params.push('fit=' + snakeCase(options.fit))
  }

  if (options.focus) {
    params.push('f=' + snakeCase(options.focus))
  }

  if (options.width) {
    params.push('w=' + options.width)
  }

  if (options.height) {
    params.push('h=' + options.height)
  }

  return options && options.image
    ? options.image.fields.file.url + (params.length ? '?' + params.join('&') : '')
    : null
}

const setBackgroundImage = (element, url) => {

  if (!element.style) {
    element.style = {}
  }

  if (url) {
    element.style.backgroundImage = 'url(' + url + ')'
  } else {
    element.style.backgroundImage = undefined
  }

}

const updateState = (element, value) => {
  setBackgroundImage(element, composeImageUrl(normalizeOptions(value)))
}

// <div v-contentful-background-image="image" />
export default {

  // https://vuejs.org/v2/guide/custom-directive.html#Hook-Functions
  // https://vuejs.org/v2/guide/custom-directive.html#Directive-Hook-Arguments
  bind (el, { value }) {
    updateState(el, value)
  },

  inserted () {},

  update (el, { value }) {
    updateState(el, value)
  },

  componentUpdated () {},

  unbind () {}

}
