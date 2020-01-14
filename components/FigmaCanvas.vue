<script>
export default {
  name: 'FigmaCanvas',

  props: {

    project: {
      type: String,
      required: true
    },

    node: {
      type: String,
      required: false
    }

  },

  computed: {

    src () {
      let url = 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F' + this.project

      if (this.node) {
        url += '%2F%3Fnode-id%3D' + this.node
      }

      return url
    }

  }
}
</script>

<template>
  <iframe
    :src="src"
    class="c-figma-canvas"
    allowfullscreen
  />
</template>
