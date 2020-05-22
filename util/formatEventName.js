import { camelCase, lowerCase, map } from 'lodash'

// Convert event name to a conventional colon-separated string that's safe to use in HTML templates
export default (...eventNameParts) => {
  return map(eventNameParts, (eventNamePart) => {
    return lowerCase(camelCase(eventNamePart))
  }).join(':')
}
