import { isDate, isNaN } from 'lodash'

export default (value) => {
  if (isDate(value) && value.getTime && !isNaN(value.getTime())) {
    return true
  }
  return false
}
