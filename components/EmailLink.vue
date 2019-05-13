<script>
import replaceAll from '../util/replaceAll'

export default {
  name: 'EmailLink',

  props: {

    to: {
      type: String,
      required: true
    },

    external: {
      default: false
    },

    subject: {
      type: String,
      required: false
    },

    body: {
      type: String,
      required: false
    }

  },

  computed: {

    href () {
      const params = []

      if (this.subject) {
        params.push('subject=' + this.subject)
      }

      if (this.body) {
        params.push('body=' + replaceAll(this.body, '\n', '%0D%0A').trim())
      }

      return 'mailto:' + this.to + (params.length ? '?' + params.join('&') : '')
    },

    bindings () {

      if (this.external) {
        return {
          rel: 'nofollow noopener',
          target: '_blank'
        }
      }

      return null
    }

  },

  methods: {
    onClick () {
      this.$emit('click')
    }
  }

}
</script>

<template>
  <a
    class="c-email-link"
    v-bind="bindings"
    :href="href"
    @click="onClick"
  ><slot /></a>
</template>
