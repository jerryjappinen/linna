<script>
import GooglePlayBadge from './GooglePlayBadge'
import ExternalLink from './ExternalLink'

export default {
  name: 'GooglePlayLink',

  components: {
    GooglePlayBadge,
    ExternalLink
  },

  props: {

    packageName: {
      type: [Number, String],
      required: true
    },

    title: {},
    theme: {}

  },

  computed: {

    href () {
      if (this.packageName) {
        return 'http://play.google.com/store/apps/details?id=' + this.packageName
      }
      return null
    }

  }

}
</script>

<template>
  <external-link
    class="c-google-play-link"
    :href="href"
  >
    <slot>
      <google-play-badge
        class="c-google-play-link-badge"
        :title="title"
        :theme="theme"
      />
    </slot>
  </external-link>
</template>
