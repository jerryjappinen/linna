// https://storybook.js.org/docs/configurations/custom-webpack-config/
const path = require('path');

const sharedStylesPath = 'base/styles/shared.scss'

// https://github.com/karify/external-svg-sprite-loader/blob/master/index.js
// NOTE: normally SVGO wants its configuration values in a really weird format, but we will normalize it later
const svgoConfig = {
  removeViewBox: false,
  removeTitle: true,

  // cleanupIds: {
  //   remove: false,
  //   minify: false,
  //   prefix: 'svg-'
  // },

  // https://github.com/svg/svgo/blob/master/plugins/convertTransform.js
  convertTransform: {
    degPrecision: 0,
    floatPrecision: 0,
    transformPrecision: 0
  },

  convertColors: {
    names2hex: true,
    rgb2hex: true,
    shorthex: true,
    shortname: true,

    // Convert this color code in fills/strokes/etc. to currentColor (used to generate mono-capable assets)
    // NOTE: must be exact, case-sensitive match before any other conversions
    // Assets must be authored with this in mind
    // https://github.com/svg/svgo/blob/master/plugins/_collections.js#L2527
    // https://github.com/svg/svgo/blob/master/plugins/convertColors.js#L61
    currentColor: '#FF00FF'

  }
}

module.exports = async ({ config }) => {

  // Support for Sass, with injected shared variables
  config.module.rules.push({
    test: /\.scss$/,
    loaders: [
      // 'vue-style-loader',
      'style-loader',
      'css-loader',
      'sass-loader',
      {
        loader: 'sass-resources-loader',
        options: {
          resources: [
            path.join(process.cwd(), sharedStylesPath)
          ]
        }
      }
    ],
    include: path.resolve(__dirname, '../'),
  })

  // Load raw data
  config.module.rules.push({
    test: /\.(txt|json)$/i,
    use: 'raw-loader'
  })

  const svgoPlugins = []
  for (const pluginName in svgoConfig) {
    svgoPlugins.push({
      [pluginName]: svgoConfig[pluginName]
    })
  }

  // Replace default SVG loader to load SVG icons as components
  // NOTE: if this same definition is used for multiple formats, this will break those imports
  const svgRule = config.module.rules.find((rule) => {
    return rule.test.test('.svg')
  })
  svgRule.test = /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/
  // svgRule.test = svgRule.test.replace('svg|', '')

  // Load raw data
  config.module.rules.push({
    test: /\.svg$/i,
    use: {
      loader: 'vue-svg-loader',
      options: {
        svgo: {
          plugins: svgoPlugins
        }
      }
    }
  })

  // config.module.rules.push({
  //   test: /\.svg$/i,
  //   use: 'vue-svg-loader'
  // })

  // Return the altered config
  return config
}
