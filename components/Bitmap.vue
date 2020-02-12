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
    },

    naturalWidth: {
      type: [Number, String],
      default: null
    },

    naturalHeight: {
      type: [Number, String],
      default: null
    }

  },

  computed: {

    normalizedTitle () {
      return this.title ? ('' + this.title).trim() : this.title
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
  <img
    class="c-bitmap"
    :alt="normalizedTitle"
    :width="naturalWidth"
    :height="naturalHeight"
    :src="src"
    :title="normalizedTitle"
    @click="onClick"
  >
</template>
