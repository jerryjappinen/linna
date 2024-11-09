<script>
import kebabCase from 'lodash/kebabCase'

export default {
  name: 'Vector',

  props: {

    src: {
      type: String,
      required: true
    },

    title: {
      type: String,
      required: false
    }

  },

  computed: {

    component () {
      return kebabCase(this.src)
    }

  }

}
</script>

<template>
  <component
    :is="'svg-' + component"
    class="c-vector"
    :class="'c-vector-' + component"
    :title="title || src"
  />
</template>
