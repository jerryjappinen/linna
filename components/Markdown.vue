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
      type: Boolean,
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
    },

    component () {
      return this.inline ? 'span' : 'div'
    }

  }

}
</script>

<template>
  <!-- eslint-disable vue/no-v-html -->
  <component
    :is="component"
    class="c-markdown"
  >

    <component
      :is="component"
      v-if="bodyHtml"
      class="c-markdown-content c-markdown-body"
      v-html="bodyHtml"
    />

    <component
      :is="component"
      v-else
      class="c-markdown-content c-markdown-placeholder"
    >
      <slot />
    </component>

  </component>
</template>
