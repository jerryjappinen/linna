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
  const componentName = vnode.context.$vnode.tag.replace('vue-component-', '')
  const dashIndex = componentName.indexOf('-')

  // If component has a name
  if (dashIndex > 0 && componentName.length > dashIndex + 1) {
    return 'c-' + componentName.substr(dashIndex + 1)
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

  console.log('composeClassname', value)

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
