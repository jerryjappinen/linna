// FIXME: this should be deprecated, use getNuxtPageHeadCallback instead
import getNuxtPageHeadCallback from './getNuxtPageHeadCallback'

export default (siteTitle, baseUrl, disableScriptSanitization) => {
  return {
    head: getNuxtPageHeadCallback({
      siteTitle,
      baseUrl,
      disableScriptSanitization
    })
  }
}
