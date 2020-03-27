import md5 from 'md5'

export default (email, size, fallbackImageUrl) => {
  return 'https://www.gravatar.com/avatar/' + md5(email) + '.jpg' +
    (size ? ('?s=' + size) : '') +
    (fallbackImageUrl ? ('?d=' + fallbackImageUrl) : '')
}
