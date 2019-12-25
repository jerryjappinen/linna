<script>
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

    onLoaded () {
      this.isHidden = false
    },

    onClick (event) {
      this.$emit('click', event)
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
    :src="src"
    :title="title"
    @click="onClick"
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
