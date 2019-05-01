<script>
export default {
  name: 'ExternalLink',

  props: {
    href: {
      type: String,
      default: null
    }
  },

  methods: {
    onClick (event) {
      this.$emit('click', event)
    }
  }

}
</script>

<template>
  <a
    class="c-external-link"
    :href="href"
    rel="nofollow noopener"
    target="_blank"
    @click="onClick"
  ><slot /></a>
</template>
