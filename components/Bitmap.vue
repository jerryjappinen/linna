<script>
export default {
  name: 'Bitmap',

  props: {

    src: {
      type: String,

      // Not required in order to support lazy loading images
      required: false
    },

    title: {
      type: String,
      required: false
    }

  },

  computed: {

    normalizedTitle () {
      return this.title ? ('' + this.title).trim() : this.title
    }

  }

}
</script>

<template>
  <img
    class="c-bitmap"
    :src="src"
    :alt="normalizedTitle"
    :title="normalizedTitle"
  >
</template>
