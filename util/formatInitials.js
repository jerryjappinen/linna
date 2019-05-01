import { camelCase, replace, snakeCase } from 'lodash'

import trimWhitespace from './trimWhitespace'

const getInitialsFromParts = (parts) => {
  return (parts[0].slice(0, 1) + parts[1].slice(0, 1)).toUpperCase()
}

// Return a lowercase, short two-letter string without special characters
export default (string) => {

  if (string) {
    const normalizedString = '' + string

    // Initials of multiple parts
    const whitespaceParts = trimWhitespace(normalizedString).split(' ')
    if (whitespaceParts.length > 1) {
      return getInitialsFromParts(whitespaceParts)
    }

    // Initials of camelCasing
    const camelCaseParts = replace(snakeCase(normalizedString), '_', ' ').split(' ')
    if (camelCaseParts.length > 1) {
      return getInitialsFromParts(camelCaseParts)
    }

    return camelCase(normalizedString)
      .slice(0, 2)
      .toUpperCase()
  }

  return string
}
