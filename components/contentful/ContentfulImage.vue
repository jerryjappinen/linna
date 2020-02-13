<script>
import ContentfulImageBase from './ContentfulImageBase'

import Bitmap from '../Bitmap'

export default {
  name: 'ContentfulImage',

  components: {
    Bitmap
  },

  ...ContentfulImageBase

}
</script>

<template>
  <bitmap
    class="c-contentful-image"
    :natural-width="naturalWidth || width"
    :natural-height="naturalHeight || height"
    :src="src"
    :title="resolvedTitle"
  />
</template>
