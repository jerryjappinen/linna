<script>
import lozad from 'lozad'

import VideoPlayer from './VideoPlayer'

export default {
  name: 'LazyVideoPlayer',

  components: {
    VideoPlayer
  },

  props: {

    threshold: {
      required: false
    },

    src: {},
    title: {},
    poster: {},
    controls: {},
    autoplay: {},
    loop: {},
    type: {}
  },

  data () {
    return {
      isLoaded: false,
      observer: null
    }
  },

  mounted () {

    this.observer = lozad(this.$el, {
      loaded: this.onLoaded,
      threshold: this.threshold
    })

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
  <video-player
    class="c-lazy-video-player"
    :class="{
      'c-lazy-video-player-loaded': isLoaded,
      'c-lazy-video-player-not-loaded': !isLoaded
    }"
    :lazy="true"
    :src="src"
    :title="title"
    :poster="poster"
    :controls="controls"
    :autoplay="autoplay"
    :loop="loop"
    :type="type"
  />
</template>

<style lang="scss">

.c-lazy-video-player {
  @include transition-slow(opacity);
}

.c-lazy-video-player-not-loaded {
  opacity: 0;
}

</style>
