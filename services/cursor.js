import debounce from 'lodash/debounce'
import Vue from 'vue'

import windowExists from 'linna-util/windowExists'

const debounceDelay = 1

export default new Vue({

  data () {
    return {
      x: 0,
      y: 0,
      callback: null
    }
  },

  created () {
    if (windowExists()) {

      this.callback = debounce((event) => {
        this.x = event.clientX
        this.y = event.clientY
      }, debounceDelay)

      window.addEventListener('mousemove', this.callback)
    }
  },

  beforeDestroy () {
    if (windowExists() && this.callback) {
      window.removeEventListener('moudemove', this.callback)
    }
  }

})
