<script>
import { kebabCase } from 'lodash'

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
      return kebabCase('svg-' + this.src)
    }

  }

}
</script>

<template>
  <component
    :is="component"
    class="c-vector"
    :class="'c-vector-' + src"
    :title="title"
  />
</template>
