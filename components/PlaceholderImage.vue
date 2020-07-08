<script>
export default {
  name: 'PlaceholderImage',

  props: {

    width: {
      type: Number,
      default: 200
    },

    height: {
      type: Number,
      default: null
    },

    dpi: {
      type: Number,
      default: 1
    }

  },

  computed: {

    imageWidth () {
      return this.width * this.dpi
    },

    imageHeight () {
      return (this.height || this.height) * this.dpi
    },

    viewBox () {
      return '0 0 ' + this.imageWidth + ' ' + (this.imageWidth || this.imageHeight)
    },

    src () {
      return 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="' + this.imageWidth + '" height="' + this.imageHeight + '" viewBox="' + this.viewBox + '" preserveAspectRatio="none"></svg>'
    }

  }
}
</script>

<template>
  <img
    :src="src"
    :width="width"
    :height="width || height"
    class="c-placeholder-image"
  >
</template>
