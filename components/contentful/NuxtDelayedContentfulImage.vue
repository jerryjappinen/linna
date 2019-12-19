<script>
import ContentfulImage from './ContentfulImage'

let imageComponent = ContentfulImage
if (process.browser) {
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
    :dpi="dpi"
    :format="format"
    :fit="fit"
    :focus="focus"
    :hidden="hidden"
  />
</template>
