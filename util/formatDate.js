import { format } from 'date-fns'

export default (date) => {
  return format(date, 'd MMMM yyyy')
}
