<script>
import MarkdownIt from 'markdown-it'

// https://github.com/markdown-it/markdown-it
const markdownParser = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: false
})

export default {
  name: 'Markdown',

  props: {

    body: {
      type: String,
      required: true
    },

    inline: {
      default: false
    }

  },

  computed: {

    bodyHtml () {
      return this.body
        ? this.inline
          ? markdownParser.renderInline(this.body)
          : markdownParser.render(this.body)
        : null
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
