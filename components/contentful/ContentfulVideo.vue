<script>
import LazyVideoPlayer from '../LazyVideoPlayer'

export default {
  name: 'ContentfulImage',

  components: {
    LazyVideoPlayer
  },

  props: {

    title: {
      type: String,
      default: null
    },

    video: {
      type: Object,
      required: true
    }

  }

}
</script>

<template>
  <lazy-video-player
    v-if="isVideo"
    class="c-rich-text-asset-video"
    :src="video.fields.file.url"
    :title="title || video.fields.title || video.fields.description"
  />
</template>
