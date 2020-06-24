import getUserAgentStringValue from 'linna-util/getUserAgentStringValue'
import parseVersionNumber from 'linna-util/parseVersionNumber'

let nativeDesktopPlatform = null
let nativeDesktopVersion = null

try {

  if (navigator && navigator.userAgent) {

    // Detect Nativefier wrapper
    nativeDesktopPlatform = getUserAgentStringValue(
      navigator.userAgent,
      'ElectronPlatform'
    )

    // Desktop app version
    nativeDesktopVersion = getUserAgentStringValue(
      navigator.userAgent,
      'ElectronAppVersion'
    )

    if (nativeDesktopPlatform) {
      // eslint-disable-next-line no-console
      console.log('Platform:', nativeDesktopPlatform, nativeDesktopVersion)
    }

  }

} catch (error) {
  // eslint-disable-next-line no-console
  console.warn('Platform detection failed', error)
}

export default {
  nativeDesktopPlatform,
  nativeDesktopVersion,
  parsedNativeDesktopVersion: parseVersionNumber(nativeDesktopVersion)
}
