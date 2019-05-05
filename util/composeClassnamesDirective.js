import {
  isArray,
  isNumber,
  isString,
  kebabCase,
  keyBy,
  mapKeys,
  mapValues
} from 'lodash'

export const getPrefix = (vnode) => {
  const staticPrefix = vnode.context.$vnode.componentInstance.classesDirectivePrefix

  // In case component has a name
  let componentNamePrefix = null
  const componentName = vnode.context.$vnode.tag.replace('vue-component-', '')
  const dashIndex = componentName.indexOf('-')

  if (dashIndex > 0 && componentName.length > dashIndex + 1) {
    componentNamePrefix = componentName.substr(dashIndex + 1)
  }

  if (staticPrefix && componentNamePrefix) {
    return staticPrefix + '-' + componentNamePrefix

  } else if (componentNamePrefix) {
    return componentNamePrefix

  } else if (staticPrefix) {
    return staticPrefix
  }

  return null
}

export const normalizeBindingValue = (value, prefix) => {
  let normalizedValue = value

  // Normalize strings to an array
  if (isString(normalizedValue)) {
    normalizedValue = normalizedValue.split(' ')
  }

  // Normalize array of class names
  if (isArray(normalizedValue)) {
    normalizedValue = mapValues(keyBy(normalizedValue, (value) => {
      return value
    }), () => {
      return true
    })
  }

  // Normalize keys
  normalizedValue = mapKeys(normalizedValue, (value, key) => {
    return kebabCase((prefix ? (prefix + '-') : '') + key)
  })

  return normalizedValue
}

// Compose final classname
export const composeClassname = (key, value) => {

  if (value) {
    if (isString(value) || isNumber(value)) {
      return kebabCase(key + '-' + value)

    } else if (value) {
      return key
    }
  }

  return null
}

export const composeClassnames = (classnamesMap) => {
  const classnames = []

  for (const key in classnamesMap) {
    const classname = composeClassname(key, classnamesMap[key])
    if (classname) {
      classnames.push(classname)
    }
  }

  return classnames
}
