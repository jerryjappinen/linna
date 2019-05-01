import { format } from 'date-fns'

export default (date) => {
  return format(date, 'MMMM yyyy')
}
