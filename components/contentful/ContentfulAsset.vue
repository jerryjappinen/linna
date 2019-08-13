<script>
import asset from '../../mixins/contentfulAsset'

import ContentfulImage from './ContentfulImage'
import ContentfulVideo from './ContentfulVideo'

export default {
  name: 'ContentfulAsset',

  components: {
    ContentfulImage,
    ContentfulVideo
  },

  mixins: [asset]
}
</script>

<template>
  <div class="c-rich-text-asset">

    <!-- Image -->
    <contentful-image
      v-if="isImage"
      class="c-rich-text-asset-image"
      :image="asset"
    />

    <!-- Video -->
    <contentful-video
      v-if="isVideo"
      class="c-rich-text-asset-video"
      :video="asset"
    />

    <pre v-else>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <code v-html="asset" />
    </pre>

  </div>
</template>
