import { isPlainObject } from 'lodash'

import getContentfulImageUrl from '../util/getContentfulImageUrl'

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
  setBackgroundImage(element, getContentfulImageUrl(normalizeOptions(value)))
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
