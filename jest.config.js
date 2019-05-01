// module.exports = {
//   moduleFileExtensions: [
//     'js',
//     'jsx',
//     'json',
//     'vue'

//     // Added (same as `vue.config.js`)
//     // 'scss',
//     // 'css',
//     // 'svg'
//   ],
//   transform: {
//     // '^.+\\.vue$': 'vue-jest',
//     // '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
//     '^.+\\.jsx?$': 'babel-jest'
//   },
//   transformIgnorePatterns: [

//     // https://github.com/vuejs/vue-cli/issues/1584
//     '/node_modules/'

//   ],
//   moduleNameMapper: {

//     // '^@/(.*)$': '<rootDir>/src/$1'

//     // NOTE: Jest can't handle static assets
//     // '^.+\\.(jpg|jpeg|gif|png|mp4|mkv|avi|webm|swf|wav|mid)$': 'jest-static-stubs/$1',

//     // NOTE: Jest can't handle this SVG loader
//     // '^.+\\.(svg)$': '<rootDir>/test/unit/stubs/svg.stub.js'

//   },
//   snapshotSerializers: [
//     // 'jest-serializer-vue'
//   ],
//   // testMatch: [
//   //   '**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)'
//   // ],
//   testURL: 'http://localhost/'
// }

const path = require('path')

module.exports = {
  rootDir: path.resolve(__dirname, './'),
  moduleFileExtensions: [
    'js',
    'jsx',
    'json',
    'vue'
  ],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    // '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^.+\\.jsx?$': 'babel-jest'
  },
  // testPathIgnorePatterns: [
  //   '<rootDir>/e2e'
  // ],
  // snapshotSerializers: [
  //   'jest-serializer-vue'
  // ],
  // setupFiles: [
  //   '<rootDir>/test/unit/setup'
  // ],
  coverageDirectory: '<rootDir>/coverage'
}
