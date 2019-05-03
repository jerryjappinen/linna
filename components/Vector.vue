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
    },

    renderedTitle () {
      return this.title ? this.title : null
    }

  }

}
</script>

<template>
  <component
    :is="component"
    class="c-vector"
    :class="'c-vector-' + src"
    :title="renderedTitle"
  />
</template>
