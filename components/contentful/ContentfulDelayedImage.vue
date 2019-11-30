<script>
import ContentfulImageBase from './ContentfulImageBase'

import DelayedBitmap from '../DelayedBitmap'

export default {
  name: 'ContentfulImage',

  components: {
    DelayedBitmap
  },

  ...ContentfulImageBase

}
</script>

<template>
  <delayed-bitmap
    class="c-contentful-delayed-image"
    :src="src"
    :title="resolvedTitle"
  />
</template>
