<script>
import DelayedBitmap from './DelayedBitmap'

import isClient from 'linna-util/isClient'

// NOTE: only works client-side
let lozad = null
if (isClient()) {
  lozad = require('lozad').default
}

export default {
  name: 'LazyBitmap',

  components: {
    DelayedBitmap
  },

  props: {
    src: {},
    srcSet: {},
    title: {}
  },

  data () {
    return {
      isLoaded: false,
      observer: null
    }
  },

  computed: {

    attributes () {

      if (lozad) {
        return {
          'data-src': this.src,
          'data-srcset': this.srcSet
        }
      }

      return {
        src: this.src,
        srcset: this.srcSet
      }
    }

  },

  mounted () {

    if (lozad) {

      this.$el.addEventListener('load', this.onLoaded)

      this.$once('hook:destroyed', () => {
        this.$el.removeEventListener('load', this.onLoaded)
      })

      this.observer = lozad(this.$el)
      this.observer.observe()

    }

  },

  methods: {

    onLoaded () {
      this.isLoaded = true
    }

  }

}
</script>

<template>
  <delayed-bitmap
    v-bind="attributes"
    class="c-lazy-bitmap"
    :class="{
      'c-lazy-bitmap-loaded': isLoaded,
      'c-lazy-bitmap-not-loaded': !isLoaded
    }"
    :title="title"
    :hidden="!isLoaded"
  />
</template>
