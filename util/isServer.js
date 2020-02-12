import isClient from './isClient'

export default () => {
  return !isClient()
}
