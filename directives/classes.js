import { uniq } from 'lodash'

import {
  composeClassnames,
  getPrefix,
  normalizeBindingValue
} from '../util/composeClassnamesDirective'



const datasetKey = '__vueClassesDirectiveClasses'

const updateState = (el, binding, vnode) => {
  const newClassnames = composeClassnames(normalizeBindingValue(binding.value, getPrefix(vnode)))

  const oldClassnames = el[datasetKey]
    ? el[datasetKey].split(' ')
    : []

  el[datasetKey] = uniq(oldClassnames.concat(newClassnames)).join(' ')

  el.classList.remove(...oldClassnames)
  el.classList.add(...newClassnames)
}

export default {

  // https://vuejs.org/v2/guide/custom-directive.html#Hook-Functions
  // https://vuejs.org/v2/guide/custom-directive.html#Directive-Hook-Arguments
  bind (el, binding, vnode) {
    el[datasetKey] = ''
    updateState(el, binding, vnode)
  },

  inserted () {},

  update (el, binding, vnode) {
    updateState(el, binding, vnode)
  },

  componentUpdated () {},

  unbind (el) {
    delete el[datasetKey]
  }

}
