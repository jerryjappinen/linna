<script>
import Bitmap from './Bitmap'

let ImageComponent = Bitmap
if (process.browser) {
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
  }

}
</script>

<template>
  <image-component
    :src="src"
    :title="title"
    :hidden="hidden"
  />
</template>
