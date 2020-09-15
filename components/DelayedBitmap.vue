<script>
// FIXME: make this universal (should work with Nuxt)
import imagesLoaded from 'vue-images-loaded'

import Bitmap from './Bitmap'

export default {
  name: 'DelayedBitmap',

  directives: {
    imagesLoaded
  },

  components: {
    Bitmap
  },

  props: {
    naturalWidth: {},
    naturalHeight: {},
    src: {},
    title: {},

    // Force hidden state
    hidden: {
      required: false
    }

  },

  data () {
    return {
      isHidden: true
    }
  },

  methods: {

    onLoaded (event) {
      this.isHidden = false
      this.$emit('loaded', event)
    }

  }

}
</script>

<template>
  <bitmap
    v-images-loaded="onLoaded"
    class="c-delayed-bitmap"
    :class="{
      'c-delayed-bitmap-hidden': isHidden || hidden,
      'c-delayed-bitmap-visible': !(isHidden || hidden)
    }"
    :natural-width="naturalWidth"
    :natural-height="naturalHeight"
    :src="src"
    :title="title"
    v-on="$listeners"
  />
</template>

<style lang="scss">

.c-delayed-bitmap {
  @include transition-medium(opacity);
}

.c-delayed-bitmap-hidden {
  opacity: 0;
}

</style>
