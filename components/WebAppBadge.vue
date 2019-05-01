<script>
import WebAppBadgeDark from './WebAppBadge/WebAppBadgeDark.svg'
import WebAppBadgeLight from './WebAppBadge/WebAppBadgeLight.svg'

export default {
  name: 'WebAppBadge',

  components: {
    WebAppBadgeDark,
    WebAppBadgeLight
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
      return this.theme === 'light' ? 'web-app-badge-light' : 'web-app-badge-dark'
    }

  }

}
</script>

<template>
  <component
    :is="component"
    class="c-web-app-badge"
    :title="title"
  />
</template>
