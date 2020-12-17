<script>
import toPlainText from 'linna-util/toPlainText'

export default {
  name: 'Plaintext',

  props: {

    body: {
      type: String,
      required: true
    },

    block: {
      default: false
    }

  },

  computed: {

    component () {
      return this.block ? 'div' : 'span'
    },

    content () {
      return this.body ? toPlainText(this.body) : ''
    }

  }

}
</script>

<template>
  <component
    :is="component"
    class="c-plaintext"
  >
    {{ content }}
  </component>
</template>
