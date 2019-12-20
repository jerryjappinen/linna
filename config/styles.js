// Duplicate SCSS values needed by JS
// NOTE: there are webpack loaders for exposing these from SCSS
// They're unreliable though and not worth the hassle (especially with Jest)
export default {
  transitionFast: 150,
  transitionSlow: 450,
  breakpointPhone: 800,
  breakpointTablet: 1120,
  breakpointSmall: 768,
  breakpointMedium: 960,
  breakpointLarge: 1280
}
