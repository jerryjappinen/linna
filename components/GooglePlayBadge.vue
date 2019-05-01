<script>
import GooglePlayBadgeDark from './GooglePlayBadge/GooglePlayBadgeDark.svg'
import GooglePlayBadgeLight from './GooglePlayBadge/GooglePlayBadgeLight.svg'

export default {
  name: 'GooglePlayBadge',

  components: {
    GooglePlayBadgeDark,
    GooglePlayBadgeLight
  },

  props: {

    title: {
      type: [Number, String],
      required: false
    },

    theme: {
      type: String,
      default: 'dark',
      validator (value) {
        return ['light', 'dark'].indexOf(value) !== -1
      }
    }

  },

  computed: {

    component () {
      return this.theme === 'light' ? 'google-play-badge-light' : 'google-play-badge-dark'
    }

  }

}
</script>

<template>
  <component
    :is="component"
    class="c-google-play-badge"
    :title="title"
  />
</template>
