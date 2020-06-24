<script>
import Bitmap from './Bitmap'

import isClient from 'linna-util/isClient'

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
  }

}
</script>

<template>
  <image-component
    :src="src"
    :title="title"
    :hidden="hidden"
    v-on="$listeners"
  />
</template>
