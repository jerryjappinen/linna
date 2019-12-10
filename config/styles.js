// Duplicate SCSS values needed by JS
// NOTE: there are webpack loaders for exposing these from SCSS
// They're unreliable though and not worth the hassle (especially with Jest)
export default {
  transitionFast: 150,
  transitionSlow: 450,
  breakpointMedium: 960
}
