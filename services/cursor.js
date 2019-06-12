import { debounce } from 'lodash'
import Vue from 'vue'

const hasWindow = () => {
  return typeof window !== 'undefined'
}

const debounceDelay = 10

export default new Vue({

  data () {
    return {
      x: 0,
      y: 0,
      listener: null
    }
  },

  mounted () {
    if (hasWindow()) {

      this.listener = debounce((event) => {
        this.x = event.offsetX
        this.y = event.offsetY
      }, debounceDelay)

      window.addEventListener('mousemove', this.listener)

    }
  },

  beforeDestroy () {
    if (hasWindow() && this.listener) {
      window.removeEventListener('moudemove', this.listener)
    }
  }

})
