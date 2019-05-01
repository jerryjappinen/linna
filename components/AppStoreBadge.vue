<script>
import AppStoreBadgeDark from './AppStoreBadge/AppStoreBadgeDark.svg'
import AppStoreBadgeLight from './AppStoreBadge/AppStoreBadgeLight.svg'

export default {
  name: 'AppStoreBadge',

  components: {
    AppStoreBadgeDark,
    AppStoreBadgeLight
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
      return this.theme === 'light' ? 'app-store-badge-light' : 'app-store-badge-dark'
    }

  }

}
</script>

<template>
  <component
    :is="component"
    class="c-app-store-badge"
    :title="title"
  />
</template>
