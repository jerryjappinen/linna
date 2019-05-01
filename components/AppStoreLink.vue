<script>
import AppStoreBadge from './AppStoreBadge'
import ExternalLink from './ExternalLink'

export default {
  name: 'AppStoreLink',

  components: {
    AppStoreBadge,
    ExternalLink
  },

  props: {

    appId: {
      type: [Number, String],
      required: true
    },

    title: {},
    theme: {}

  },

  computed: {

    href () {
      if (this.appId) {
        return 'https://itunes.apple.com/us/app/ab-classic/' + this.appId + '?mt=8'
      }
      return null
    }

  }

}
</script>

<template>
  <external-link
    class="c-app-store-link"
    :href="href"
  >
    <slot>
      <app-store-badge
        class="c-app-store-link-badge"
        :title="title"
        :theme="theme"
      />
    </slot>
  </external-link>
</template>
