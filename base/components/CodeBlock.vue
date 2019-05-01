<script>
import safeStringify from 'fast-safe-stringify'
import { isArray, isNumber, isString } from 'lodash'
import 'highlight.js/styles/github-gist.css'

import hljs from 'highlight.js'

export default {
  name: 'CodeBlock',

  props: {

    source: {
      default: null
    },

    lang: {
      type: String,
      default: null
    }

  },

  computed: {

    safe () {
      if (isNumber(this.source) || isString(this.source)) {
        return this.source
      }
      return safeStringify(this.source, (k, v) => {
        return v === undefined ? 'undefined' : v
      }, 2)
    },

    trimmed () {
      return this.safe ? this.safe.trim() : ''
    },

    highlightedHtml () {
      const lang = this.lang
        ? isArray(this.lang)
          ? this.lang
          : [this.lang]
        : null
      return hljs.highlightAuto(this.trimmed, lang)
    }

  }

}
</script>

<template>
  <!-- eslint-disable vue/no-v-html -->
  <pre class="c-code-block"><code
    v-if="highlightedHtml"
    class="c-code-block-code"
    :class="'c-code-block-' + highlightedHtml.language"
    v-html="highlightedHtml.value"
  /></pre>
</template>

<style lang="scss">

.c-code-block {
  @include push-vertical;
  @include pad-loose;
  overflow: auto;
  border-width: 1px;
  background-color: rgba(255, 255, 255, 0.5);
}

.c-code-block-code {
  background-color: transparent;
}

</style>
