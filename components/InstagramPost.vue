<script>
import ExternalLink from './ExternalLink'
import NuxtDelayedBitmap from './NuxtDelayedBitmap'
import VideoPlayer from './VideoPlayer'

export default {
  name: 'InstagramPost',

  components: {
    ExternalLink,
    NuxtDelayedBitmap,
    VideoPlayer
  },

  props: {

    post: {
      type: Object,
      required: true
    },

    hd: {
      default: false
    }

  },

  computed: {

    isPortrait () {
      return (this.post.images.standard_resolution.width < this.post.images.standard_resolution.height)
    },

    isVideo () {
      return this.post.type === 'video' && this.post.videos
    },

    imageSrc () {
      return this.hd
        ? this.post.images.low_resolution.url
        : this.post.images.standard_resolution.url
    },

    videoSrc () {
      return !this.isVideo
        ? null
        : this.hd
          ? this.post.videos.low_bandwidth.url
          : this.post.videos.standard_resolution.url
    },

    title () {
      return this.post.caption && this.post.caption.text
        ? this.post.caption.text
        : this.post.location && this.post.location.name
          ? this.post.location.name
          : this.post.user.full_name
    }

  },

  methods: {

    onVideoClick () {
      if (this.$refs.video.paused) {
        this.$refs.video.play()
      } else {
        this.$refs.video.pause()
      }
    }

  }

}
</script>

<template>
  <div
    :class="{
      'c-instagram-post-hd': hd,
      'c-instagram-post-portrait': isPortrait,
      'c-instagram-post-landscape': !isPortrait
    }"
    class="c-instagram-post"
  >

    <!-- Video -->
    <video-player
      v-if="isVideo"
      ref="video"
      class="c-instagram-post-video"
      :src="videoSrc"
      :poster="imageSrc"
      playsinline
      autoplay
      muted
      loop
      @click="onVideoClick"
    />

    <!-- Image wrapped in a link -->
    <external-link
      v-else
      class="c-instagram-post-image"
      :href="post.link"
    >
      <nuxt-delayed-bitmap
        class="c-instagram-post-image"
        :src="imageSrc"
        :title="title"
      />
    </external-link>

  </div>
</template>

<style lang="scss">

.c-instagram-post {
  @include relative;
  @include no-overflow;
}

.c-instagram-post-link {
  @include block;
  @include fill-relative;
}

.c-instagram-post-image,
.c-instagram-post-video {
  @include keep-full-center;
}

.c-instagram-post-portrait {
  .c-instagram-post-image,
  .c-instagram-post-video {
    max-width: 100%;
    max-height: none;
  }
}

.c-instagram-post-landscape {
  .c-instagram-post-image,
  .c-instagram-post-video {
    max-width: none;
    max-height: 100%;
  }
}

</style>
