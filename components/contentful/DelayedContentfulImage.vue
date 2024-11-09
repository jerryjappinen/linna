<script>
import ContentfulImageBase from './contentfulImageBase'

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
    :natural-width="naturalWidth || width"
    :natural-height="naturalHeight || height"
    :src="src"
    :title="resolvedTitle"
    :hidden="hidden"
    v-on="$listeners"
  />
</template>
