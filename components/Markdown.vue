<script>
import marked from 'marked'

export default {
  name: 'Markdown',

  props: {
    body: {
      type: String,
      required: true
    }
  },

  computed: {

    html () {
      return this.body ? marked(this.body) : ''
    }

  }

}
</script>

<template>
  <!-- eslint-disable vue/no-v-html -->
  <div
    class="c-markdown"
    v-html="html"
  />
</template>
