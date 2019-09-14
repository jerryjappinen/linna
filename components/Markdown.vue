<script>
import marked from 'marked'

const markedOptions = {
  silent: true
}

export default {
  name: 'Markdown',

  props: {
    body: {
      type: String,
      required: true
    }
  },

  computed: {

    bodyHtml () {
      return this.body ? marked(this.body, markedOptions) : null
    }

  }

}
</script>

<template>
  <!-- eslint-disable vue/no-v-html -->
  <div class="c-markdown">

    <div
      v-if="bodyHtml"
      class="c-markdown-content c-markdown-body"
      v-html="bodyHtml"
    />

    <div
      v-else
      class="c-markdown-content c-markdown-placeholder"
    >
      <slot />
    </div>

  </div>
</template>
