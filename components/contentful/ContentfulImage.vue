<script>
import { includes, snakeCase } from 'lodash'

import Bitmap from '../Bitmap'

const fitValues = [
  'pad',
  'fill',
  'scale',
  'crop',
  'thumb'
]

const focusValues = [
  'face',
  'faces',
  'center',
  'top',
  'right',
  'left',
  'bottom',
  'top_right',
  'top_left',
  'bottom_right',
  'bottom_left'
]

export default {
  name: 'ContentfulImage',

  components: {
    Bitmap

  },

  props: {

    title: {
      type: String,
      default: null
    },

    image: {
      type: Object,
      required: true
    },

    width: {
      default: null
    },

    height: {
      default: null
    },

    fit: {
      default: null,
      validator (input) {
        return !input || includes(fitValues, snakeCase(input))
      }
    },

    focus: {
      default: null,
      validator (input) {
        return !input || includes(focusValues, snakeCase(input))
      }
    }

  },

  computed: {

    src () {
      const url = this.image.fields.file.url
      const params = []

      // Set fit & resize behavior easily
      // https://www.contentful.com/developers/docs/references/images-api/#/reference/resizing-&-cropping/change-the-resizing-behavior
      if (this.fit) {
        params.push('fit=' + snakeCase(this.fit))
      } else if (this.width && this.height) {
        params.push('fit=' + 'thumb')
      }

      if (this.focus) {
        params.push('f=' + snakeCase(this.focus))
      }

      if (this.width) {
        params.push('w=' + this.width)
      }

      if (this.height) {
        params.push('h=' + this.height)
      }

      return url + (params.length ? '?' + params.join('&') : '')
    }

  }

}
</script>

<template>
  <bitmap
    class="c-contentful-image"
    :src="src"
    :title="title || image.fields.description || image.fields.title"
  />
</template>
