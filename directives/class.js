import { uniq } from 'lodash'

import {
  composeClassnames,
  getComponentNamePrefix,
  getStaticPrefix,
  isRoot,
  joinPrefixes,
  normalizeBindingValue
} from '../util/composeClassnamesDirective'



const datasetKey = '__vueClassesDirectiveClasses'

const updateState = (el, binding, vnode) => {
  const staticPrefix = getStaticPrefix(vnode)
  const componentNamePrefix = getComponentNamePrefix(vnode)
  const prefix = joinPrefixes(staticPrefix, componentNamePrefix)

  const newClassnames = composeClassnames(
    normalizeBindingValue(binding.value, prefix)
  )

  // Root component always gets the root class
  if (componentNamePrefix && isRoot(vnode)) {
    newClassnames.push(prefix)
  }

  const oldClassnames = el[datasetKey]
    ? el[datasetKey].split(' ')
    : []

  // Remove dynamic classnames from previous state
  el.classList.remove(...oldClassnames)

  // Update classnames that reflect the current state
  el.classList.add(...newClassnames)

  // Update list of classnames that this directive will control
  el[datasetKey] = uniq(oldClassnames.concat(newClassnames)).join(' ')

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
