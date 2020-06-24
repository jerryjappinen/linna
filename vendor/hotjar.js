import windowExists from 'linna-util/windowExists'

export default {

  init (hotjarId, hotjarSecondaryKey) {
    if (windowExists() && document) {
      return ((h, o, t, j, a, r) => {

        h.hj = h.hj || function () {
          (h.hj.q = h.hj.q || []).push(arguments)
        }

        h._hjSettings = {
          hotjarId,
          hotjarSecondaryKey
        }

        a = o.getElementsByTagName('head')[0]

        r = o.createElement('script')
        r.async = 1
        r.src = t + h._hjSettings.hotjarId + j + h._hjSettings.hotjarSecondaryKey

        a.appendChild(r)

      })(
        window,
        document,
        'https://static.hotjar.com/c/hotjar-',
        '.js?sv='
      )
    }
  }

}
