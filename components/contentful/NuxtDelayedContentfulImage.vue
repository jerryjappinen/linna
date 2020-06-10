<script>
import ContentfulImage from './ContentfulImage'

import isClient from 'linna-util/isClient'

let imageComponent = ContentfulImage
if (isClient()) {
  imageComponent = require('./DelayedContentfulImage').default
}

export default {
  name: 'NuxtDelayedContentfulImage',

  components: {
    ContentfulImage: imageComponent
  },

  props: {
    title: {},
    url: {},
    image: {},
    width: {},
    height: {},
    naturalWidth: {},
    naturalHeight: {},
    dpi: {},
    format: {},
    fit: {},
    focus: {},
    hidden: {}
  }

}
</script>

<template>
  <contentful-image
    :title="title"
    :url="url"
    :image="image"
    :width="width"
    :height="height"
    :natural-width="naturalWidth"
    :natural-height="naturalHeight"
    :dpi="dpi"
    :format="format"
    :fit="fit"
    :focus="focus"
    :hidden="hidden"
    v-on="$listeners"
  />
</template>
