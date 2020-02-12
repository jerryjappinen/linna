<script>
import ContentfulImageBase from './ContentfulImageBase'

import DelayedBitmap from '../DelayedBitmap'

const base = {
  ...ContentfulImageBase
}

base.props.hidden = {}

export default {
  name: 'DelayedContentfulImage',

  components: {
    DelayedBitmap
  },

  ...base
}
</script>

<template>
  <delayed-bitmap
    class="c-delayed-contentful-image"
    :natural-width="naturalWidth"
    :natural-height="naturalHeight"
    :src="src"
    :title="resolvedTitle"
    :hidden="hidden"
  />
</template>
