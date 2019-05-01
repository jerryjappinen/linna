<script>
// FIXME: won't work with Nuxt's server-side rendering
import lozad from 'lozad'

import DelayedBitmap from './DelayedBitmap'

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

  mounted () {

    this.$el.addEventListener('load', this.onLoaded)

    this.$once('hook:destroyed', () => {
      this.$el.removeEventListener('load', this.onLoaded)
    })

    this.observer = lozad(this.$el)
    this.observer.observe()

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
    class="c-lazy-bitmap"
    :class="{
      'c-lazy-bitmap-loaded': isLoaded,
      'c-lazy-bitmap-not-loaded': !isLoaded
    }"
    :data-src="src"
    :data-srcset="srcSet"
    :title="title"
    :hidden="!isLoaded"
  />
</template>
