<script>
const baseUrl = 'https://www.youtube.com/embed/'

export default {
  name: 'YoutubePlayer',

  props: {

    video: {
      type: String,
      default: null
    },

    playlist: {
      type: Array,
      default: null
    },

    mute: {
      default: false
    },

    autoplay: {
      default: false
    },

    dimensions: {
      default: true
    },

    frame: {
      default: true
    }

  },

  computed: {

    firstVideoId () {

      if (!this.video && this.playlist) {
        return this.playlist[0]
      }

      return this.video
    },

    bindings () {
      const bindings = {}

      if (this.frame) {
        bindings.allowfullscreen = true
      }

      return bindings
    },

    src () {
      return baseUrl + this.firstVideoId + '?' + this.queryParameters.join('&')
    },

    queryParameters () {
      const params = [
        'rel=0',
        'color=white',
        'playsinline=1',
        'disablekb=1',
        'enablejsapi=1',
        'modestbranding=1'
      ]

      if (this.mute) {
        params.push('mute=1')
      }

      if (this.autoplay) {
        params.push('autoplay=1')
        params.push('loop=1')
      }

      if (this.playlist && this.playlist.length > 1) {
        const playlist = this.video
          ? this.playlist
          : this.playlist.slice(1)

        params.push('playlist=' + playlist.join(','))
      }

      if (this.frame) {
        params.push('showinfo=1')
        params.push('controls=1')
      } else {
        params.push('showinfo=0')
        params.push('controls=0')
      }

      return params
    }

  }

}
</script>

<template>
  <iframe
    v-bind="bindings"
    :src="src"
    :class="{
      'c-youtube-player-dimensions': dimensions,
      'c-youtube-player-frame': frame
    }"
    type="text/html"
    class="c-youtube-player"
    width="1280"
    height="720"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    frameborder="0"
  />
</template>

<style lang="scss">

.c-youtube-player {
  @include no-overflow;
  max-height: 100%;
}

.c-youtube-player-dimensions {
  @include dimensions-landscape(280px);

  @include screen-over(375px) {
    @include dimensions-landscape(320px);
  }

  @include screen-over(540px) {
    @include dimensions-landscape(480px);
  }

  @include screen-over(640px) {
    @include dimensions-landscape(500px);
  }

  // @include screen-over(768px) {
  //   @include dimensions-landscape(640px);
  // }

  // @include screen-over(960px) {
  //   @include dimensions-landscape(768px);
  // }

  // @include screen-over(1024px) {
  //   @include dimensions-landscape(880px);
  // }

  // @include screen-over(1280px) {
  //   @include dimensions-landscape(960px);
  // }

  @include full {
    @include dimensions-landscape(464px);
  }

}

</style>
