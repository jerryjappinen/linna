<script>
import MobileWebAppBadgeDark from './MobileWebAppBadge/MobileWebAppBadgeDark.svg'
import MobileWebAppBadgeLight from './MobileWebAppBadge/MobileWebAppBadgeLight.svg'

export default {
  name: 'MobileWebAppBadge',

  components: {
    MobileWebAppBadgeDark,
    MobileWebAppBadgeLight
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
      return this.theme === 'light' ? 'mobile-web-app-badge-light' : 'mobile-web-app-badge-dark'
    }

  }

}
</script>

<template>
  <component
    :is="component"
    class="c-mobile-web-app-badge"
    :title="title"
  />
</template>
