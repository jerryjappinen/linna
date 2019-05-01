import formatSlug from '../../util/formatSlug'

describe('formatSlug', () => {

  it('should slice to 16 chars', () => {
    expect(formatSlug('fooofooofooofooo')).toEqual('fooofooofooofooo')
    expect(formatSlug('fooofooofooofooofooofooofooofooo')).toEqual('fooofooofooofooo')
    expect(formatSlug('foobar')).toEqual('foobar')
  })

  it('lowercases uppercase', () => {
    expect(formatSlug('Fooofooofooofooo')).toEqual('fooofooofooofooo')
    expect(formatSlug('foooFooofooofooo')).toEqual('fooofooofooofooo')
    expect(formatSlug('FOOBar')).toEqual('foobar')
  })

  it('removes special characters', () => {
    expect(formatSlug('foo-bar')).toEqual('foobar')
    expect(formatSlug('foo_bar')).toEqual('foobar')
    expect(formatSlug('foo&#$^&(@*!$&(*$)++_#!bar')).toEqual('foobar')
  })

  it('retains numbers special characters', () => {
    expect(formatSlug('foo-1bar')).toEqual('foo1bar')
    expect(formatSlug('foo_2bar')).toEqual('foo2bar')
    expect(formatSlug('foo3bar')).toEqual('foo3bar')
  })

  it('stringifies numbers', () => {
    expect(formatSlug(212)).toEqual('212')
    expect(formatSlug(-212)).toEqual('212')
  })

})
