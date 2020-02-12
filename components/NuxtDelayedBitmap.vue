<script>
import Bitmap from './Bitmap'

import isClient from '../util/isClient'

let ImageComponent = Bitmap
if (isClient()) {
  ImageComponent = require('./DelayedBitmap').default
}

export default {
  name: 'NuxtDelayedBitmap',

  components: {
    ImageComponent
  },

  props: {
    src: {},
    title: {},
    hidden: {}
  },

  methods: {
    onClick (event) {
      this.$emit('click', event)
    }
  }

}
</script>

<template>
  <image-component
    :src="src"
    :title="title"
    :hidden="hidden"
    @click="onClick"
  />
</template>
