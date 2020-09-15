<script>
export default {
  name: 'ExternalLink',

  props: {
    href: {
      type: String,
      default: null
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
    v-on="$listeners"
  ><slot /></a>
</template>
