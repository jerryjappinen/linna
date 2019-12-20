// Duplicate SCSS values needed by JS
// NOTE: there are webpack loaders for exposing these from SCSS
// They're unreliable though and not worth the hassle (especially with Jest)

const breakpointSmall = 800
const breakpointMedium = 960
const breakpointLarge = 1280

export default {
  transitionFast: 150,
  transitionSlow: 450,
  breakpointPhone: breakpointSmall,
  breakpointTablet: breakpointLarge,
  breakpointSmall,
  breakpointMedium,
  breakpointLarge
}
