<script>
export default {
  name: 'ExternalLink',

  props: {

    href: {
      type: String,
      default: null
    },

    here: {
      type: Boolean,
      default: false
    },

    refer: {
      type: Boolean,
      default: false
    }

  },

  computed: {

    bind () {
      const attributes = {
        rel: 'nofollow noopener'
      }

      if (!this.here) {
        attributes.target = '_blank'
      }

      if (!this.refer) {
        attributes.rel += ' noreferrer'
      }

      return attributes
    }

  }

}
</script>

<template>
  <a
    class="c-external-link"
    :href="href"
    v-bind="bind"
    v-on="$listeners"
  ><slot /></a>
</template>
