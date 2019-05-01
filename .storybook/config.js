import { addParameters, configure } from '@storybook/vue'
import { kebabCase } from 'lodash'
import Vue from 'vue'

import '../base/styles/global.scss'
import * as components from '../base/components/'

// Vue globals for documentation
for (const key in components) {
  Vue.component(kebabCase(key), components[key])
}



// https://webpack.js.org/guides/dependency-management/#requirecontext
const req = require.context('./', true, /\.stories\.js$/)

function loadStories() {
  req.keys().forEach((filename) => {
    return req(filename)
  })
}

addParameters({
  options: {
    showPanel: false,
    panelPosition: 'right',
    sortStoriesByKind: true
  }
})

configure(loadStories, module)
