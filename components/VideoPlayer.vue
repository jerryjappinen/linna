<script>
// FIXME: change this so user can pass multiple formats
export default {
  name: 'VideoPlayer',

  props: {

    src: {
      type: [Array, String],
      required: true
    },

    type: {
      type: String,
      default: 'mp4'
    },

    // SRC attributes
    // mp4: {
    //   type: String,
    //   default: null
    // },
    // ogg: {
    //   type: String,
    //   default: null
    // },



    title: {
      type: String,
      default: null
    },

    poster: {
      type: String,
      default: null
    },

    mute: {},
    controls: {},
    autoplay: {},
    loop: {},

    // Support for lazy loading wrapper component
    lazy: {}

  },

  computed: {

    // srcs () {
    //   if (this.src instanceof Array) {
    //     return this.src
    //   }
    //   return [this.src]
    // },

    mimeType () {
      return (this.type.indexOf('/' < 0) ? 'video/' : '') + this.type
    },

    bindings () {
      const bindings = {}

      if (this.autoplay) {
        bindings.autoplay = true
        bindings.playsinline = true
      }

      if (this.autoplay || this.mute) {
        bindings.muted = true
      }

      if (this.loop) {
        bindings.loop = true
      }

      if (this.controls) {
        bindings.controls = true
      }

      return bindings
    },

    sourceBinding () {
      return {
        [this.lazy ? 'data-src' : 'src']: this.src
      }
    }

  }

}
</script>

<template>
  <video
    v-bind="bindings"
    class="c-video-player c-video-player-video"
    :title="title"
    :poster="poster"
    v-on="$listeners"
  >
    <source
      v-bind="sourceBinding"
      :type="mimeType"
    >
    <img
      v-if="poster"
      :src="poster"
      :title="title"
      :alt="title"
    >
  </video>
</template>
