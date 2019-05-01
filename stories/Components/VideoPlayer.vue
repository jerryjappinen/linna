<script>
import LazyVideoPlayer from '../../components/LazyVideoPlayer'
import VideoPlayer from '../../components/VideoPlayer'

import autoplayCodeSample from './code/VideoPlayer/autoplay.txt'
import defaultCodeSample from './code/VideoPlayer/default.txt'
import lazyCodeSample from './code/VideoPlayer/lazy.txt'
import posterCodeSample from './code/VideoPlayer/poster.txt'

export default {

  components: {
    LazyVideoPlayer,
    VideoPlayer
  },

  data () {
    return {
      video: 'Sunset-in-Flight',
      lazyVideo: 'Skater-in-the-Park',
      videoTitle: 'Random video',

      autoplayCodeSample,
      defaultCodeSample,
      lazyCodeSample,
      posterCodeSample
    }
  },

  computed: {

    videoUrl () {
      return this.getVideoUrl(this.video)
    },

    posterUrl () {
      return this.getPosterUrl(this.video)
    },

    lazyVideoUrl () {
      return this.getVideoUrl(this.lazyVideo)
    },

    lazyPosterUrl () {
      return this.getPosterUrl(this.lazyVideo)
    }

  },

  methods: {

    getPosterUrl (video) {
      return 'https://storage.googleapis.com/coverr-public/poster/' + video + '.jpg'
    },

    getVideoUrl (video) {
      return 'https://app.coverr.co/s3/mp4/' + video + '.mp4'
    }

  }

}

</script>

<template>
  <div>

    <h1>VideoPlayer</h1>

    <html-block :source="defaultCodeSample" />

    <video-player
      :src="videoUrl"
      :title="videoTitle"
      :controls="true"
    />

    <h3>Poster</h3>

    <p>
      Use the <code>poster="posterImageUrl"</code> attribute to add a placeholder image. This will be displayed until the video is loaded, decoded and ready to play.
    </p>

    <html-block :source="posterCodeSample" />

    <video-player
      :src="videoUrl"
      :title="videoTitle"
      :poster="posterUrl"
      :controls="true"
    />

    <h3>Autoplay</h3>

    <p>
      Add <code>autoplay</code> and/or <code>loop</code> attributes. <code>mute</code> is also supported, but all autoplay videos will be muted so that they autoplay work on all platforms.
    </p>

    <html-block :source="autoplayCodeSample" />

    <video-player
      :src="videoUrl"
      :title="videoTitle"
      :poster="posterUrl"
      :autoplay="true"
      :loop="true"
    />

    <h3 class="viewport-push">
      Scroll down to test lazy loading
    </h3>

    <h1>LazyVideoPlayer</h1>

    <p>
      The browser will only load the video data once the element enters the user's viewport. The video element will be faded in as soon as the image is loaded, but might still display the poster until the browser is ready to play the video.
    </p>

    <html-block :source="lazyCodeSample" />

    <lazy-video-player
      :src="lazyVideoUrl"
      :title="videoTitle"
      :poster="lazyPosterUrl"
      :autoplay="true"
      :loop="true"
    />

  </div>
</template>

<style lang="scss" scoped>

.viewport-push {
  margin-bottom: 100vh;
}

video {
  width: 480px;
}

</style>
