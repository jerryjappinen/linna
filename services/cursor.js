import { debounce } from 'lodash'
import Vue from 'vue'

import windowExists from 'linna-util//windowExists'

const debounceDelay = 10

export default new Vue({

  data () {
    return {
      x: 0,
      y: 0,
      listener: null
    }
  },

  created () {
    if (windowExists()) {

      this.listener = debounce((event) => {
        this.x = event.clientX
        this.y = event.clientY
      }, debounceDelay)

      window.addEventListener('mousemove', this.listener)

    }
  },

  beforeDestroy () {
    if (windowExists() && this.listener) {
      window.removeEventListener('moudemove', this.listener)
    }
  }

})
