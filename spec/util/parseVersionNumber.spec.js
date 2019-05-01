import { isArray } from 'lodash'

import parseVersionNumber from '../../util/parseVersionNumber'

describe('parseVersionNumber', () => {

  it('should return array', () => {
    expect(isArray(parseVersionNumber('1.0.0'))).toBeTruthy()
  })

  it('should have correct number of elements', () => {
    expect(parseVersionNumber('1').length).toBe(1)
    expect(parseVersionNumber('1.0').length).toBe(2)
    expect(parseVersionNumber('1.0.0').length).toBe(3)
    expect(parseVersionNumber('1.0.0.0').length).toBe(4)
  })

  it('should return null', () => {
    expect(parseVersionNumber()).toBe(null)
    expect(parseVersionNumber('')).toBe(null)
    expect(parseVersionNumber([])).toBe(null)
  })

})
