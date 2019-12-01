import { isDate, isNaN } from 'lodash'

import normalizeDate from '../../util/normalizeDate'

const isValidDate = (value) => {
  return !!(isDate(value) && value.getTime && !isNaN(value.getTime()))
}

describe('normalizeDate', () => {

  it('Returns null on empty values', () => {
    expect(normalizeDate()).toBeNull()
    expect(normalizeDate(null)).toBeNull()
    expect(normalizeDate(false)).toBeNull()
  })

  it('Returns date on number', () => {
    expect(isValidDate(normalizeDate(0))).toBeTruthy()
    expect(isValidDate(normalizeDate(1))).toBeTruthy()
    expect(isValidDate(normalizeDate(2120))).toBeTruthy()
  })

  it('Returns date on string', () => {
    expect(isValidDate(normalizeDate('November 2020'))).toBeTruthy()
    expect(isValidDate(normalizeDate('Sun Dec 01 2019 13:28:12 GMT+0200 (Eastern European Standard Time)'))).toBeTruthy()
    expect(isValidDate(normalizeDate('2120-09-12 00:23:12'))).toBeTruthy()
  })

  it('Returns date on date', () => {
    const date1 = new Date()
    const date2 = new Date('Sun Dec 01 2019 13:28:12 GMT+0200 (Eastern European Standard Time)')
    expect(expect(Object.is(normalizeDate(date1), date1))).toBeTruthy()
    expect(expect(Object.is(normalizeDate(date2), date2))).toBeTruthy()
  })

})
