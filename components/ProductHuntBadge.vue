<script>
import ExternalLink from './ExternalLink'

export default {
  name: 'ProductHuntBadge',

  components: {
    ExternalLink
  },

  props: {

    postId: {
      type: [Number, String],
      required: true
    },

    postSlug: {
      type: String,
      required: true
    },

    title: {
      type: String,
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

    href () {
      return 'https://www.producthunt.com/posts/' + this.postSlug + '?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-' + this.postSlug
    },

    src () {
      return 'https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=' + this.postId + '&theme=' + this.theme
    }

  }

}
</script>

<template>
  <external-link :href="href">
    <img
      :src="src"
      :alt="title"
      style="width: 250px; height: 54px;"
      width="250px"
      height="54px"
    >
  </external-link>
</template>
